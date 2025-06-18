'use client';

import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from './ThemeToggle.module.css';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

export default function ThemeToggle({ toggleTheme, theme }: ThemeToggleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.themeToggle}
    >
      <motion.button
        onClick={toggleTheme}
        className={styles.toggleButton}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'dark' ? <FaSun size={24} /> : <FaMoon size={24} />}
      </motion.button>
    </motion.div>
  );
}