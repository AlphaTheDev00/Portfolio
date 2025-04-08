import { motion } from 'framer-motion';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>About Me</h2>
          <div className="about-text">
            <p>
              Junior software engineer with a strong design background and freelance experience in branding and UI/UX. 
              Recently completed General Assembly's Software Engineering Immersive, focusing on full-stack development.
            </p>
            <p>
              I combine creative design skills with technical expertise to build clean, user-friendly web applications 
              using JavaScript, React, Node.js, and Python. Looking to join a collaborative team focused on creating 
              exceptional digital experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
