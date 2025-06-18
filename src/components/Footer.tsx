'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'; // Using FaCode as a LeetCode placeholder
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.footerContent}
      >
        <p className={styles.footerText}>© 2025 Tahseen Raza. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <motion.a
            href="https://github.com/StudentTahseenraza"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tahseen-raza7646/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/_tahseen_raza/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            whileHover={{ scale: 1.1 }}
          >
            <FaCode /> 
          </motion.a>
        </div>
      </motion.div>
    </footer>
  );
}