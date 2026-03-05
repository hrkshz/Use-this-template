import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { profile, type Level } from '../data/profile';
import styles from './Skills.module.css';

const levelLabels = ['基礎', '実務', '得意'];

const LevelDots: React.FC<{ level: Level }> = ({ level }) => (
    <div className={styles.levelDots} aria-label={`習熟度: ${levelLabels[level - 1]}`}>
        {[1, 2, 3].map(i => (
            <span key={i} className={`${styles.dot} ${i <= level ? styles.dotFilled : ''}`} />
        ))}
        <span className={styles.levelLabel}>{levelLabels[level - 1]}</span>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>スキル・資格</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <div className={styles.skillGrid}>
                    {profile.skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            className={styles.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
                        >
                            <h3 className={styles.categoryTitle}>{category.title}</h3>
                            <div className={styles.skillList}>
                                {category.skills.map((skill, index) => (
                                    <div key={index} className={styles.skillItem}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <LevelDots level={skill.level} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {profile.certifications.length > 0 && (
                    <motion.div
                        className={styles.certSection}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h3 className={styles.certTitle}>
                            <Award size={22} /> 保有資格
                        </h3>
                        <div className={styles.certGrid}>
                            {profile.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className={`${styles.certCard} ${cert.highlight ? styles.certHighlight : ''}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                                >
                                    <span className={styles.certName}>{cert.name}</span>
                                    <span className={styles.certDate}>{cert.date}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Skills;
