'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Resume.module.css';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const downloadUrl = 'https://drive.google.com/uc?export=download&id=1-7_yLo0zKwApV3GARgiuaWm5CBd-KBUG'; // For downloading
  const previewUrl = 'https://drive.google.com/file/d/1-7_yLo0zKwApV3GARgiuaWm5CBd-KBUG/preview'; // For viewing

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };

  return (
    <section id="resume" className={styles.resumeSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className={styles.resumeTitle}>My Resume</h2>
        <div className={styles.resumeActions}>
          <motion.a
            href={downloadUrl}
            download="Tahseen_Raza_Resume.pdf"
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
          >
            Download Resume
          </motion.a>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
          >
            View Resume
          </motion.button>
          <motion.a
            href="mailto:toushifraza2015@gmail.com?subject=Hiring%20Inquiry"
            className={styles.hireMeButton}
            whileHover={{ scale: 1.05 }}
          >
            Hire Me
          </motion.a>
        </div>

        {isModalOpen && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button
                onClick={() => setIsModalOpen(false)}
                className={styles.closeButton}
              >
                ✕
              </button>
              <iframe
                src={previewUrl}
                className={styles.resumeIframe}
                title="Resume"
              />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}