'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import styles from './page.module.css';
import Experiences from '@/components/Experience';
import About from './about/page';
import Skills from './skills/page';

export default function Home() {
  return (
    <main className={styles.main}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        
        <Hero />
        <About />
        <Projects />
        <Skills/>  
        <Experiences/>
        <Contact />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.resumeContainer}
        >
          
        </motion.div>
        <Footer />
      </motion.div>
    </main>
  );
}