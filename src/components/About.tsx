import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <section className={styles.about} id="about">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>職務経歴</h2>
                    <div className={styles.line}></div>
                </motion.div>

                {profile.narrative && (
                    <motion.div
                        className={styles.narrative}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p>{profile.narrative}</p>
                    </motion.div>
                )}

                <div className={styles.timeline}>
                    {profile.engineerCareers.length > 0 && (
                        <div className={styles.timelineSection}>
                            <p className={styles.timelineLabel}>エンジニアキャリア</p>
                            {profile.engineerCareers.map((career, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.timelineItem} ${styles.engineer}`}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.engineerCard}>
                                        <div className={styles.cardHeader}>
                                            <div>
                                                <h3 className={styles.cardTitle}>{career.company}</h3>
                                                <span className={styles.cardRole}>{career.role}</span>
                                            </div>
                                        </div>
                                        {career.project && (
                                            <h4 className={styles.projectTitle}>{career.project}</h4>
                                        )}
                                        <p className={styles.cardDesc}>{career.desc}</p>

                                        {career.tasks && career.tasks.length > 0 && (
                                            <div className={styles.sectionBlock}>
                                                <span className={styles.sectionLabel}>【主な担当業務】</span>
                                                <ul className={styles.sectionList}>
                                                    {career.tasks.map((task, i) => (
                                                        <li key={i}>{task}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {career.achievements && career.achievements.length > 0 && (
                                            <div className={styles.sectionBlock}>
                                                <span className={styles.sectionLabel}>【実績・成果】</span>
                                                <ul className={styles.sectionList}>
                                                    {career.achievements.map((ach, i) => (
                                                        <li key={i}>{ach}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {career.tech && (
                                            <div className={styles.techBadge}>
                                                <strong>使用技術: </strong>{career.tech}
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {profile.generalCareers.length > 0 && (
                        <div className={styles.timelineSection}>
                            <p className={styles.timelineLabel}>それ以前のキャリア</p>
                            {profile.generalCareers.map((career, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.timelineItem} ${styles.general}`}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.06 }}
                                >
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.generalCard}>
                                        <div className={styles.generalCardBody}>
                                            <span className={styles.generalCardTitle}>{career.role}</span>
                                            <span className={styles.generalCardDesc}>{career.desc}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default About;
