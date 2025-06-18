'use client';

import { motion } from 'framer-motion';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa6'; // Font Awesome 6 icons
import {
  SiTypescript,
  // SiThreedots,
  SiRedux,
  SiTailwindcss,
  // SiMaterialUi, // Fixed: SiMaterialui -> SiMaterialUi
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiPuppeteer,
  // SiVisualStudioCode, // Fixed: SiVisualstudiocode -> SiVisualStudioCode
} from 'react-icons/si'; // Simple Icons
import { DiCss3 } from 'react-icons/di'; // DevIcons for WebSockets, RESTAPIs
import { GiDatabase } from 'react-icons/gi'; // Game Icons for DBMS
import { GrSystem } from 'react-icons/gr'; // Grommet Icons for OperatingSystems
import styles from './Skills.module.css';

// Define skills with percentages and corresponding icons
const skills = [
  { name: 'JavaScript', percentage: 90, icon: <FaJs /> },
  { name: 'TypeScript', percentage: 80, icon: <SiTypescript /> },
  { name: 'Java', percentage: 75, icon: <FaJava /> },
  { name: 'Python', percentage: 70, icon: <FaPython /> },
  { name: 'C/C++', percentage: 65, icon: <FaJs /> }, // No specific icon, using FaJs as placeholder
  { name: 'SQL', percentage: 80, icon: <FaDatabase /> },
  { name: 'React.js', percentage: 85, icon: <FaReact /> },
  { name: 'Next.js', percentage: 80, icon: <FaReact /> }, // Using React icon for Next.js
  { name: 'ReduxToolkit', percentage: 75, icon: <SiRedux /> },
  { name: 'HTML', percentage: 95, icon: <FaHtml5 /> },
  { name: 'CSS', percentage: 90, icon: <FaCss3Alt /> },
  { name: 'TailwindCSS', percentage: 80, icon: <SiTailwindcss /> },
  // { name: 'MaterialUI', percentage: 75, icon: <SiMaterialUi /> }, // Fixed icon
  { name: 'Node.js', percentage: 75, icon: <FaNodeJs /> },
  { name: 'Express.js', percentage: 70, icon: <SiExpress /> },
  { name: 'RESTAPIs', percentage: 80, icon: <DiCss3 /> }, // Placeholder icon
  { name: 'WebSockets', percentage: 70, icon: <DiCss3 /> }, // Placeholder icon
  { name: 'Socket.io', percentage: 70, icon: <SiSocketdotio /> },
  { name: 'MongoDB', percentage: 75, icon: <SiMongodb /> },
  { name: 'MySQL', percentage: 70, icon: <SiMysql /> },
  { name: 'Firebase', percentage: 65, icon: <SiFirebase /> },
  { name: 'Git', percentage: 85, icon: <FaGitAlt /> },
  { name: 'GitHub', percentage: 85, icon: <FaGithub /> },
  { name: 'Postman', percentage: 80, icon: <SiPostman /> },
  { name: 'Puppeteer', percentage: 70, icon: <SiPuppeteer /> },
  // { name: 'VSCode', percentage: 90, icon: <SiVisualStudioCode /> }, // Fixed icon
  { name: 'DataStructures', percentage: 80, icon: <FaDatabase /> }, // Placeholder icon
  { name: 'Algorithm', percentage: 80, icon: <FaDatabase /> }, // Placeholder icon
  { name: 'OOP', percentage: 85, icon: <FaJs /> }, // Placeholder icon
  { name: 'DBMS', percentage: 75, icon: <GiDatabase /> },
  { name: 'OperatingSystems', percentage: 70, icon: <GrSystem /> },
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
          className={styles.skillsList}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${styles.skillItem} glass`}
            >
              <div className={styles.skillHeader}>
                <span className={styles.skillIcon}>{skill.icon}</span>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercentage}>{skill.percentage}%</span>
              </div>
              <div className={styles.percentageBar}>
                <motion.div
                  className={styles.percentageFill}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1.5, ease: 'easeOut', delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
}