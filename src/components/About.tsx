import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './About.module.css';

const About: React.FC = () => {
    const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setOpenIndexes(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

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
                    {profile.careers.map((career, index) => {
                        const isOpen = openIndexes.has(index);

                        return (
                            <motion.div
                                key={index}
                                className={styles.timelineItem}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <div className={styles.timelineDot}></div>
                                <div
                                    className={`${styles.card} ${isOpen ? styles.open : ''}`}
                                    onClick={() => toggle(index)}
                                >
                                    <div className={styles.cardSummary}>
                                        <div>
                                            <h3 className={styles.cardTitle}>{career.role}</h3>
                                            {career.company && (
                                                <span className={styles.cardCompany}>{career.company}</span>
                                            )}
                                        </div>
                                        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                                            <ChevronDown size={20} />
                                        </span>
                                    </div>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                className={styles.cardDetails}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className={styles.cardDesc}>{career.desc}</p>

                                                {career.project && (
                                                    <h4 className={styles.projectTitle}>{career.project}</h4>
                                                )}

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
                                                        <strong>使用ITスキル: </strong>{career.tech}
                                                    </div>
                                                )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default About;
