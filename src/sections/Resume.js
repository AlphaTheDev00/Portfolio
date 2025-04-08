import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';
import '../styles/Resume.css';

export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <motion.div
          className="resume-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Resume</h2>
          <p className="section-subtitle">My professional background and experience</p>
          
          <div className="resume-actions">
            <a 
              href="/resume.pdf" 
              download="Yassine_Chikar_Resume.pdf" 
              className="btn btn-download"
            >
              <FiDownload /> Download PDF
            </a>
          </div>

          <div className="resume-paper">
            <div className="resume-header">
              <h1>Yassine Chikar</h1>
              <div className="resume-contact-info">
                <p><FiMapPin /> Airdrie, Scotland, United Kingdom</p>
                <p><FiMail /> yassine.chikar@outlook.com</p>
                <p><FiPhone /> +44 7778 316718</p>
                <p><FiLinkedin /> linkedin.com/in/yassinechikar</p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Summary</h3>
              <p>
                Junior software engineer with a strong background in design and years of freelance experience in branding, packaging, and UI/UX. 
                Recently transitioned into tech after completing General Assembly's Software Engineering Immersive, focusing on full-stack development.
              </p>
              <p>
                With a creative eye and solid technical skills, I build clean, user-friendly web apps using JavaScript, React, Node.js, and Python. 
                My design experience helps me deliver intuitive user interfaces, while my freelance background has taught me how to manage projects, 
                meet deadlines, and work independently.
              </p>
            </div>

            <div className="resume-section">
              <h3>Experience</h3>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Aspiring Junior Software Engineer | UI-Focused Developer</h4>
                  <div className="resume-item-details">
                    <span className="company">General Assembly UK & Europe</span>
                    <span className="date">December 2024 - Present</span>
                    <span className="location">United Kingdom · Remote</span>
                  </div>
                </div>
                <ul>
                  <li>Recently completed General Assembly's fulltime Software Engineering Immersive, transitioning from design to fullstack development.</li>
                  <li><strong>Tech Stack:</strong> JavaScript, React, Node.js, Express, Python, Django, PostgreSQL, MongoDB, REST APIs</li>
                  <li><strong>Tools:</strong> Git/GitHub, Postman, Heroku, Netlify, EJS, Agile</li>
                  <li><strong>Strengths:</strong> Clean UI, intuitive UX, responsive and accessible design</li>
                  <li>Built and deployed multiple fullstack apps, collaborated in Agile teams, and combined design background with development to create functional, user-centered web apps.</li>
                  <li>Spearheaded the development of a dynamic, responsive web application, integrating RESTful APIs with a focus on UI/UX design, enhancing user engagement by 30% and improving accessibility rankings.</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Freelance Graphic Designer</h4>
                  <div className="resume-item-details">
                    <span className="company">Self Employed</span>
                    <span className="date">September 2012 - May 2019</span>
                    <span className="location">Marrakesh-Safi, Morocco · Remote</span>
                  </div>
                </div>
                <ul>
                  <li>Worked with clients across industries to create impactful branding, packaging, and marketing assets that elevate brand identities and drive results.</li>
                  <li><strong>Specialties:</strong> Branding & logo design, Packaging (cosmetics, supplements, food), Social media & digital assets, Print materials</li>
                  <li>Handled projects from concept to delivery, ensuring creative solutions, clear communication, and on-time results.</li>
                  <li><strong>Tools:</strong> Adobe Illustrator, Photoshop, InDesign, Figma, Canva</li>
                  <li><strong>Highlights:</strong> Designed packaging for a successful cosmetic launch, Created complete branding for a Mediterranean restaurant, Delivered high-performing social media visuals for e-commerce brands</li>
                </ul>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Web Integrator & UI Designer</h4>
                  <div className="resume-item-details">
                    <span className="company">WEB STUDIO AGENCY</span>
                    <span className="date">January 2013 - February 2014</span>
                    <span className="location">Marrakesh-Safi, Morocco · On-site</span>
                  </div>
                </div>
                <ul>
                  <li>Transformed design elements into fully functional web pages, combining creativity with technical skills for a seamless user experience.</li>
                  <li><strong>Key Responsibilities:</strong> UI Design, Front-End Development, Collaboration, Responsive Design</li>
                  <li><strong>Key Skills Developed:</strong> Frontend development (HTML5, CSS3, JavaScript), Collaboration in multidisciplinary teams, Focus on responsive, user-friendly design</li>
                </ul>
              </div>
            </div>

            <div className="resume-section">
              <h3>Education</h3>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Diploma, Software Engineering Immersive</h4>
                  <div className="resume-item-details">
                    <span className="company">General Assembly</span>
                    <span className="date">March 2025</span>
                  </div>
                </div>
              </div>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Bachelor's degree, Digital and Multimedia Techniques</h4>
                  <div className="resume-item-details">
                    <span className="company">Soft School</span>
                    <span className="date">July 2014</span>
                  </div>
                </div>
              </div>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <h4>Diploma in Graphic Design</h4>
                  <div className="resume-item-details">
                    <span className="company">Quasar Institute</span>
                    <span className="date">July 2013</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-section">
              <h3>Skills</h3>
              
              <div className="skills-grid">
                <div className="skills-category">
                  <h4>Development</h4>
                  <div className="skills-list">
                    <span>JavaScript</span>
                    <span>React.js</span>
                    <span>Node.js</span>
                    <span>Express.js</span>
                    <span>Python</span>
                    <span>Django</span>
                    <span>HTML/CSS</span>
                    <span>RESTful APIs</span>
                    <span>PostgreSQL</span>
                    <span>MongoDB</span>
                  </div>
                </div>
                
                <div className="skills-category">
                  <h4>Design</h4>
                  <div className="skills-list">
                    <span>UI/UX Design</span>
                    <span>Responsive Design</span>
                    <span>Adobe Creative Suite</span>
                    <span>Figma</span>
                    <span>Typography</span>
                    <span>Branding</span>
                    <span>Visual Communication</span>
                  </div>
                </div>
                
                <div className="skills-category">
                  <h4>Tools & Methods</h4>
                  <div className="skills-list">
                    <span>Git/GitHub</span>
                    <span>Agile</span>
                    <span>Postman</span>
                    <span>Webpack</span>
                    <span>Heroku</span>
                    <span>Netlify</span>
                    <span>Bootstrap</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
