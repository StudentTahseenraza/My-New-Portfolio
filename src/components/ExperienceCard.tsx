'use client';

import { motion } from 'framer-motion';
import { Experience } from '@/lib/data';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      className={`${styles.experienceCard} glass`}
    >
      <div className={styles.experienceContent}>
        <h3 className={styles.experienceRole}>{experience.role}</h3>
        <p className={styles.experienceOrganization}>{experience.organization}</p>
        <p className={styles.experienceDuration}>{experience.duration}</p>
        <ul className={styles.experienceAchievements}>
          {experience.achievements.map((achievement, idx) => (
            <li key={idx}>{achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}