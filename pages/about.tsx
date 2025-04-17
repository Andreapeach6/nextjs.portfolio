import Header from '../components/Header';
import Footer from '@/components/Footer';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaChartLine, FaLightbulb } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <motion.h1
          className={styles.heading}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className={styles.profileContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/mine.jpeg"
              alt="Profile"
              width={220}
              height={280}
              className={styles.profileImage}
            />
          </motion.div>

          <div className={styles.textContent}>
            <motion.div
              className={styles.infoBlock}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <FaCode className={styles.icon} />
              <p>
                I'm a passionate <strong>MERN Stack Developer</strong> and <strong>Data Analyst</strong>, building scalable and efficient applications using MongoDB, Express, React, and Node.js.
              </p>
            </motion.div>

            <motion.div
              className={styles.infoBlock}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <FaChartLine className={styles.icon} />
              <p>
                I combine development and data insights to drive smarter decisions, optimize performance, and deliver seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              className={styles.infoBlock}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <FaLightbulb className={styles.icon} />
              <p>
                Fueled by creativity and innovation, I strive to bring real impact by solving real problems with clean code and analytical thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link href="/projects" className={styles.ctaButton}>
                View My Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
