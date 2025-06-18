'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { aboutMessages } from '@/lib/data';
import styles from './About.module.css';

export default function About() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Cycle through messages every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % aboutMessages.length);
    }, 4000); // 4 seconds per message
    return () => clearInterval(interval);
  }, []);

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
    <section id="about" className={styles.aboutSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className={styles.aboutTitle}>About Me</h2>
        <p className={styles.aboutDescription}>
          I’m Tahseen Raza, a final-year BTech student at Maulana Azad National Urdu University, passionate about full-stack development. I specialize in building scalable web applications using modern technologies like React.js, Node.js, and Next.js. With hands-on experience in internships, academic projects, and mentorship, I’m eager to contribute to innovative tech solutions.
        </p>
        <div className={styles.balloonWrapper}>
          <div
            key={currentMessageIndex} // Force re-render to restart animation
            className={styles.balloon}
          >
            <span className={styles.balloonText}>{aboutMessages[currentMessageIndex]}</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}