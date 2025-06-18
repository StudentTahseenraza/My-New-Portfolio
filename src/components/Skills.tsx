'use client';

import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Three.js',
  'CSS',
  'HTML',
];

export default function Skills() {
  return (
    <main className={styles.skillsPage}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.skillsSection}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.skillsTitle}
        >
          My Skills
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={styles.skillsGrid}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`${styles.skillItem} glass`}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}