import { motion } from 'framer-motion';
import '../styles/Skills.css';

export default function Skills() {
  const skills = {
    'Frontend': ['React', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    'Backend': ['Node.js', 'Express', 'Django', 'Python', 'REST APIs'],
    'Database': ['MongoDB', 'PostgreSQL', 'Mongoose'],
    'Tools': ['Git', 'Netlify', 'Heroku', 'Cloudinary']
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <motion.div 
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>{category}</h3>
              <ul className="skill-items">
                {items.map((skill, i) => (
                  <li key={i} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
