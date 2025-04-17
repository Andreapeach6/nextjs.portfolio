import React from 'react';
import styles from '../styles/Projects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Header from '../components/Header'; // ✅ Import Header component

// Dynamically import framer-motion only on the client-side
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });
const MotionH1 = dynamic(() => import('framer-motion').then(mod => mod.motion.h1), { ssr: false });

const projects = {
  mern: [
    {
      title: 'NeoCare – Smarter Health',
      description: 'AI-based health diagnosis app using MERN stack and serverless architecture.',
      github: 'https://github.com/yourusername/neocare',
      demo: 'https://neocare.vercel.app',
    },
    {
      title: 'Student Registration System',
      description: 'Full CRUD app for student registration using React, Express, MongoDB.',
      github: 'https://github.com/yourusername/student-system',
      demo: '',
    },
  ],
  data: [
    {
      title: 'Sales Forecast Dashboard',
      description: 'Built with Python, Pandas, and Power BI to predict monthly sales.',
      github: 'https://github.com/yourusername/sales-forecast',
      demo: '',
    },
    {
      title: 'Customer Segmentation',
      description: 'Performed clustering analysis using Python and visualized results with Tableau.',
      github: 'https://github.com/yourusername/customer-segmentation',
      demo: '',
    },
  ],
};

export default function Projects() {
  return (
    <>
      <Header /> {/* ✅ Add Header here */}

      <div className={styles.container}>
        <MotionH1
          className={styles.title}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          My Projects
        </MotionH1>

        <MotionDiv
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>MERN Stack Projects</h2>
          <div className={styles.grid}>
            {projects.mern.map((project, index) => (
              <MotionDiv
                key={index}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.links}>
                  {project.github && (
                    <Link href={project.github} passHref>
                      <div className="link-item">
                        <FaGithub /> GitHub
                      </div>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} passHref>
                      <div className="link-item">
                        <FaExternalLinkAlt /> Live Demo
                      </div>
                    </Link>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          className={styles.section}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={styles.sectionTitle}>Data Analytics Projects</h2>
          <div className={styles.grid}>
            {projects.data.map((project, index) => (
              <MotionDiv
                key={index}
                className={styles.card}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.links}>
                  {project.github && (
                    <Link href={project.github} passHref>
                      <div className="link-item">
                        <FaGithub /> GitHub
                      </div>
                    </Link>
                  )}
                  {project.demo && (
                    <Link href={project.demo} passHref>
                      <div className="link-item">
                        <FaExternalLinkAlt /> Live Demo
                      </div>
                    </Link>
                  )}
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        <MotionDiv
          className={styles.contactButton}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/contact">
            <button className={styles.contactBtn}>Contact Me</button>
          </Link>
        </MotionDiv>
      </div>
    </>
  );
}
