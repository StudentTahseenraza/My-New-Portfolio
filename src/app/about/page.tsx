'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';
import Resume from '@/components/Resume';

export default function About() {
  return (
    <main className={styles.aboutPage}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.aboutSection}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.aboutTitle}
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${styles.aboutImageContainer} glass animate-float`}
        >
          <Image
            src="/images/MyPic.png"
            alt="About Me"
            fill
            className={styles.aboutImage}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`${styles.aboutContent} glass`}
        >
          <p className={styles.aboutText}>
            I’m a passionate full-stack developer with experience in building modern web applications using React, Next.js, Node.js, and more. I specialize in creating responsive, user-friendly interfaces with a focus on performance and aesthetics.
          </p>
          <p className={styles.aboutText}>
            When I’m not coding, you can find me exploring new technologies, working on open-source projects, or enjoying a good book.
          </p>
          
        </motion.div>
        <Resume />
      </motion.section>
    </main>
  );
}