import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';
import styles from './Navbar.module.css';

interface NavbarProps {
    scrollY: number;
    theme: 'light' | 'dark';
    onThemeToggle: () => void;
    activeSection: string;
}

const navLinks = [
    { href: '#about', label: '経歴', section: 'about' },
    { href: '#projects', label: 'プロジェクト', section: 'projects' },
    { href: '#skills', label: 'スキル・資格', section: 'skills' },
    { href: '#contact', label: '基本情報', section: 'contact' },
];

const Navbar: React.FC<NavbarProps> = ({ scrollY, theme, onThemeToggle, activeSection }) => {
    const isScrolled = scrollY > 50;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <a href="#" className={styles.logo}>
                    {profile.navName}
                </a>

                <nav className={styles.nav} aria-label="メインナビゲーション">
                    <ul className={styles.navList}>
                        {navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className={`${styles.navLink} ${activeSection === link.section ? styles.active : ''}`}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.controls}>
                    <button
                        className={styles.themeToggle}
                        onClick={onThemeToggle}
                        aria-label={theme === 'dark' ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
                    >
                        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    </button>

                    <button
                        className={styles.hamburger}
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                        aria-label="メニューを開く"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ul className={styles.mobileNavList}>
                            {navLinks.map(link => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className={`${styles.mobileNavLink} ${activeSection === link.section ? styles.active : ''}`}
                                        onClick={closeMobileMenu}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;
