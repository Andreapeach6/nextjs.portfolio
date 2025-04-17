import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mblgebgv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setError('Message failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </div>

      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className={styles.contactSection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <p>Email: <a href="mailto:andreapeach6@gmail.com">andreapeach6@gmail.com</a></p>
          </div>
          <div className={styles.infoItem}>
            <FaPhoneAlt className={styles.icon} />
            <p>Phone: <a href="tel:+2349031515095">+234 903 151 5095</a></p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.textarea}
          />
          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? 'Sending...' : formSubmitted ? 'Thank You!' : 'Send Message'}
          </button>
          {error && <p className={styles.errorText}>{error}</p>}
          {formSubmitted && <p className={styles.successText}>Message sent successfully!</p>}
        </form>

        <div className={styles.homeBtnContainer}>
          <Link href="/" passHref>
            <button className={styles.homeBtn}>Go to Home Page</button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
