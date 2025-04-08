import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Get In Touch</h2>
          <div className="contact-methods">
            <a href="tel:+447778316718" className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+44 7778 316718</span>
            </a>
            <a href="mailto:yassine.chikar@outlook.com" className="contact-item">
              <FiMail className="contact-icon" />
              <span>yassine.chikar@outlook.com</span>
            </a>
            <a href="https://www.linkedin.com/in/yassinechikar/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/AlphaTheDev00" target="_blank" rel="noopener noreferrer" className="contact-item">
              <FiGithub className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
