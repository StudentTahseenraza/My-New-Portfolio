'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Project } from '@/lib/data';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  isCurrent: boolean;
}

export default function ProjectCard({ project, isCurrent }: ProjectCardProps) {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 200);
    canvasRef.current.appendChild(renderer.domElement);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(project.image);

    // Create card geometry and material
    const geometry = new THREE.PlaneGeometry(4, 3);
    const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const card = new THREE.Mesh(geometry, material);
    scene.add(card);

    // Position camera
    camera.position.z = 5;

    // Animation
    let time = 0;
    const animate = () => {
      time += 0.02;
      card.rotation.y = Math.sin(time) * 0.3;
      card.position.y = Math.sin(time) * 0.5;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, [project.image]);

  return (
    <div className={styles.projectCardWrapper}>
      {isCurrent && (
        <div
          className={styles.balloon}
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        >
          <span className={styles.balloonText}>{project.title}</span>
        </div>
      )}
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className={`${styles.projectCard} glass`}
      >
        <div ref={canvasRef} className={styles.projectCanvas} />
        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectTech}>{project.tech}</p>
          <p className={styles.projectDescription}>{project.description}</p>
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            whileHover={{ scale: 1.05 }}
          >
            {project.liveLink.includes('github.com') ? 'View on GitHub' : 'View Live'}
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}