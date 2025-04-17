import styles from '../styles/Footer.module.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© 2025 Peace Ohaneme. All rights reserved.</p>
        <p className={styles.tagline}>Built with ❤️ using Next.js</p>
        <div className={styles.icons}>
          <a href="https://github.com/Andreapeach6" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/peace-ohaneme-4587521bb?/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:andreapeach6@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
