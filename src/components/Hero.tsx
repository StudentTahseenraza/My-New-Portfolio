'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'My Self Tahseen Raza - I Am a Full Stack Developer';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <section id="hero" className={styles.heroSection}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={styles.heroContent}
      >
        <motion.div className={`${styles.avatarContainer} animate-float`}>
          <Image
            src="/images/MyPic.png" // Use the same image as About, or add avatar.png to public/images/
            alt="Avatar"
            fill
            className={styles.avatarImage}
            onError={() => (
              <div className={styles.avatarPlaceholder}>No Image</div>
            )}
          />
        </motion.div>
        <h1 className={styles.heroTitle}>{text}</h1>
        <p className={styles.heroDescription}>
          Building innovative web solutions with modern technologies.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          className={styles.heroButton}
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
}