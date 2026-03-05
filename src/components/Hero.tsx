import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.backgroundGlow}></div>
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <motion.span
                        className={styles.greeting}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {profile.greeting}
                    </motion.span>
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <ruby><span className="text-gradient">{profile.name}</span><rt className={styles.furigana}>{profile.nameReading}</rt></ruby> です。
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {profile.subtitle}
                    </motion.p>
                    <motion.span
                        className={styles.statusBadge}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        {profile.tagline}
                    </motion.span>
                    <motion.div
                        className={styles.actions}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.45 }}
                    >
                        <motion.a href="#projects" className={styles.primaryBtn} whileTap={{ scale: 0.97 }}>
                            制作物を見る <ArrowRight size={18} />
                        </motion.a>
                        <motion.a href="#about" className={styles.secondaryBtn} whileTap={{ scale: 0.97 }}>
                            経歴を見る <BookOpen size={18} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
