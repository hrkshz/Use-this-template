import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, User } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const hasGithub = profile.github !== '';

    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className={styles.title}>基本情報</h2>
                    <div className={styles.line}></div>
                </motion.div>

                <motion.div
                    className={styles.cardGrid}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className={styles.card}>
                        <div className={styles.iconBox}><User size={24} /></div>
                        <span className={styles.cardLabel}>お名前</span>
                        <span className={styles.cardValue}>{profile.name}</span>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}><MapPin size={24} /></div>
                        <span className={styles.cardLabel}>住所</span>
                        <span className={styles.cardValue}>{profile.location}</span>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.iconBox}><Mail size={24} /></div>
                        <span className={styles.cardLabel}>メール</span>
                        <a href={`mailto:${profile.email}`} className={styles.cardLink}>{profile.email}</a>
                    </div>

                    <div className={`${styles.card} ${!hasGithub ? styles.cardDisabled : ''}`}>
                        <div className={styles.iconBox}><Github size={24} /></div>
                        <span className={styles.cardLabel}>GitHub</span>
                        {hasGithub ? (
                            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                                github.com/{profile.github}
                            </a>
                        ) : (
                            <span className={styles.cardValue}>準備中</span>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
