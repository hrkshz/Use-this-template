import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    const featured = profile.projects.filter(p => p.featured);
    const regular = profile.projects.filter(p => !p.featured);

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>制作物</h2>
                    <div className={styles.line}></div>
                </motion.div>

                {featured.map((project, index) => (
                    <motion.div
                        key={`featured-${index}`}
                        className={styles.featuredCard}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.featuredImage}>
                            <img src={project.image} alt={project.title} loading="lazy" width={600} height={400} />
                            <div className={styles.timeBadge}>
                                <Clock size={12} />
                                <span>{project.time}</span>
                            </div>
                        </div>
                        <div className={styles.featuredContent}>
                            <h3 className={styles.featuredTitle}>{project.title}</h3>
                            <p className={styles.featuredDesc}>{project.description}</p>

                            {project.challenge && (
                                <div className={styles.caseStudy}>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>課題</span>
                                        <p className={styles.caseText}>{project.challenge}</p>
                                    </div>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>アプローチ</span>
                                        <p className={styles.caseText}>{project.approach}</p>
                                    </div>
                                    <div className={styles.caseItem}>
                                        <span className={styles.caseLabel}>成果</span>
                                        <p className={styles.caseText}>{project.result}</p>
                                    </div>
                                </div>
                            )}

                            <div className={styles.tags}>
                                {project.tags.map((tag, tIndex) => (
                                    <span key={tIndex} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                            <div className={styles.visibleActionLinks}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                        <Github size={16} /> ソースコード
                                    </a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtnPrimary}>
                                        <ExternalLink size={16} /> デモサイトを見る
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {regular.length > 0 && (
                    <div className={styles.grid}>
                        {regular.map((project, index) => (
                            <motion.div
                                key={`regular-${index}`}
                                className={styles.card}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                            >
                                <div className={styles.imageContainer}>
                                    <img src={project.image} alt={project.title} className={styles.image} loading="lazy" width={500} height={220} />
                                    <div className={styles.timeBadge}>
                                        <Clock size={12} />
                                        <span>{project.time}</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDesc}>{project.description}</p>

                                    {project.challenge && (
                                        <div className={styles.caseStudyCompact}>
                                            <div className={styles.caseItemCompact}>
                                                <span className={styles.caseLabelCompact}>課題:</span>
                                                <span className={styles.caseTextCompact}>{project.challenge}</span>
                                            </div>
                                            <div className={styles.caseItemCompact}>
                                                <span className={styles.caseLabelCompact}>成果:</span>
                                                <span className={styles.caseTextCompact}>{project.result}</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className={styles.tags}>
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className={styles.visibleActionLinks}>
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
                                                <Github size={16} /> ソースコード
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.actionBtnPrimary}>
                                                <ExternalLink size={16} /> デモを見る
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
