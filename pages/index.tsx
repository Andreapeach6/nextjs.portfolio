import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.profileContainer}>
            <Image
              src="/me.jpeg"
              alt="Profile"
              width={250}
              height={350}
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h1 className={styles.heroTitle}>Hi, I'm Peace Ohaneme</h1>
            <p className={styles.heroDescription}>
              MERN Stack Developer & Data Analyst. I build fast, modern, and scalable web apps and data-driven solutions.
              Focused on performance, usability, and impact.
            </p>
            <Link href="/projects" className={styles.ctaButton}>
              View My Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
