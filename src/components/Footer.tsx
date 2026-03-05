import React from 'react';
import { Github } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} {profile.name}
                </p>
                {profile.github && (
                    <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <Github size={16} /> GitHub
                    </a>
                )}
            </div>
        </footer>
    );
};

export default Footer;
