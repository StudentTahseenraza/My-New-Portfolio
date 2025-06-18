'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';
import styles from './Projects.module.css';

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // Cycle through projects every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // 5 seconds per project
    return () => clearInterval(interval);
  }, []);

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
        staggerChildren: 0.2, // Stagger the children (project cards)
      },
    },
  };

  return (
    <section id="projects" className={styles.projectsSection}>
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
          className={styles.projectsTitle}
        >
          My Projects
        </motion.h2>
        <motion.div
          className={styles.projectsGrid}
          variants={gridVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isCurrent={index === currentProjectIndex}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}