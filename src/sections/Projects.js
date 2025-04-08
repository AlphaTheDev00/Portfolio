import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'MusicFy - Spotify Clone',
      period: 'Jan 2025 - Present',
      company: 'General Assembly UK & Europe',
      description: 'A full-stack Spotify clone with complete music streaming functionality including:',
      features: [
        'User authentication (JWT)',
        'Song browsing with filters',
        'Playlist creation and management',
        'Favorites system',
        'Responsive mobile-first design'
      ],
      technologies: {
        frontend: ['React', 'React Router', 'Axios', 'Context API', 'CSS Modules'],
        backend: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
        deployment: ['Netlify', 'MongoDB Atlas']
      },
      links: {
        github: 'https://github.com/AlphaTheDev00/Yassine-spotify-client',
        live: 'https://musicfy-clone.netlify.app'
      },
      image: '/images/musicfy.jpg'
    },
    {
      title: 'Savora Recipe Platform',
      period: 'Jan 2025 - Present',
      company: 'General Assembly UK & Europe',
      description: 'A complete recipe sharing platform with:',
      features: [
        'User accounts with profiles',
        'Recipe creation with image uploads',
        'Search and filtering system',
        'Rating and commenting',
        'Meal planning tools'
      ],
      technologies: {
        frontend: ['React', 'Bootstrap 5', 'Axios', 'React Hook Form'],
        backend: ['Django', 'Django REST Framework', 'PostgreSQL'],
        services: ['Cloudinary', 'Heroku', 'Netlify']
      },
      links: {
        github: 'https://github.com/AlphaTheDev00/recipe_platform_client',
        live: 'https://savora-recipe.netlify.app'
      },
      image: '/images/savora.jpg'
    },
    {
      title: 'HeroPedia - Superhero Platform',
      period: 'Jan 2024 - Present',
      company: 'General Assembly',
      description: 'A content sharing platform for superhero fans featuring:',
      features: [
        'User authentication',
        'Image uploads with Multer',
        'Dark/light mode toggle',
        'CRUD operations for posts',
        'Search functionality'
      ],
      technologies: {
        fullstack: ['Node.js', 'Express', 'MongoDB', 'EJS'],
        frontend: ['Bootstrap 5', 'JavaScript'],
        deployment: ['Netlify', 'MongoDB Atlas']
      },
      links: {
        github: 'https://github.com/AlphaTheDev00/HeroPedia',
        live: 'https://hero-share-pedia.netlify.app'
      },
      image: '/images/heropedia.jpg'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Featured Projects</h2>
        <p className="section-subtitle">Click on any project to learn more about the technologies used</p>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <p className="project-meta">
                    <span className="project-period">{project.period}</span>
                    <span className="project-company">{project.company}</span>
                  </p>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <div className="project-tech">
                  <h4>Technologies:</h4>
                  {Object.entries(project.technologies).map(([category, techs]) => (
                    <div key={category} className="tech-category">
                      <h5>{category.charAt(0).toUpperCase() + category.slice(1)}:</h5>
                      <div className="tech-badges">
                        {techs.map((tech, i) => (
                          <span key={i} className="tech-badge">{tech}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
