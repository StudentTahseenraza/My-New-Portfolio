'use client';

import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/lib/data';
import styles from './Experience.module.css';

export default function Experiences() {
  // Animation variants for the section
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5, // Delay the section animation by 0.5 seconds
      },
    },
  };

  // Animation variants for the grid
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the children (experience cards)
      },
    },
  };

  return (
    <section id="experiences" className={styles.experiencesSection}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className={styles.experiencesTitle}
        >
          My Experiences
        </motion.h2>
        <motion.div
          className={styles.experiencesGrid}
          variants={gridVariants}
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}