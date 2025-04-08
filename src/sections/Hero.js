import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-shape"></div>
        <div className="hero-shape"></div>
      </div>
      
      <div className="container">
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-intro">
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-name">Yassine Chikar</h1>
              <h2 className="hero-title">Software Engineer</h2>
              <div className="hero-subtitle">
                <span className="location-icon">📍</span> Edinburgh, Scotland, UK
              </div>
            </div>
            
            <p className="hero-description">
              I build exceptional digital experiences with modern web technologies.
              Specializing in <span className="tech-highlight">React</span>, <span className="tech-highlight">JavaScript</span>, <span className="tech-highlight">Node.js</span>, <span className="tech-highlight">Express</span>, <span className="tech-highlight">MongoDB</span>, <span className="tech-highlight">Python</span>, <span className="tech-highlight">Django</span>, and <span className="tech-highlight">PostgreSQL</span> with a focus on responsive design and user experience.
            </p>
            
            <div className="hero-cta">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            
            <div className="hero-socials">
              <a href="https://github.com/AlphaTheDev00" target="_blank" rel="noopener noreferrer">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/yassinechikar/" target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image">
              <img src="https://media.licdn.com/dms/image/v2/D4E03AQFC8vUSBhBHSQ/profile-displayphoto-shrink_800_800/B4EZYD.bq.HYAc-/0/1743823420538?e=1749686400&v=beta&t=wiZMnUhqP62fh5ZaM2rKuYscSYrEzUvZXaILj5HTZQg" alt="Yassine Chikar" className="profile-image" />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        >
          <FiArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
}
