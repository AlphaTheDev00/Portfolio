import { motion } from 'framer-motion';
import { FiDownload, FiMapPin, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';
import '../styles/Resume.css';
import { jsPDF } from 'jspdf';

export default function Resume() {
  // Generate and download PDF resume
  const handleDownloadClick = () => {
    const doc = new jsPDF();
    
    // Set document properties
    doc.setProperties({
      title: 'Yassine Chikar - Resume',
      author: 'Yassine Chikar',
      subject: 'Resume',
      keywords: 'resume, software engineer, developer',
    });
    
    // Add content
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('Yassine Chikar', 20, 20);
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('Software Engineer', 20, 30);
    
    // Contact info
    doc.setFontSize(10);
    doc.text('Edinburgh, Scotland, UK', 20, 40);
    doc.text('yassine.chikar@outlook.com', 20, 45);
    doc.text('+44 7778 316718', 20, 50);
    doc.text('linkedin.com/in/yassinechikar', 20, 55);
    
    // Summary
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', 20, 70);
    doc.line(20, 72, 190, 72);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const summary = 'Junior software engineer with a strong background in design and years of freelance experience in branding, packaging, and UI/UX. Recently transitioned into tech after completing General Assembly\'s Software Engineering Immersive, focusing on full-stack development. With a creative eye and solid technical skills, I build clean, user-friendly web apps using JavaScript, React, Node.js, and Python.';
    const summaryLines = doc.splitTextToSize(summary, 170);
    doc.text(summaryLines, 20, 80);
    
    // Experience
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Professional Experience', 20, 105);
    doc.line(20, 107, 190, 107);
    
    doc.setFontSize(12);
    doc.text('Aspiring Junior Software Engineer | UI-Focused Developer', 20, 115);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('General Assembly UK & Europe', 20, 122);
    doc.text('December 2024 - Present | United Kingdom · Remote', 20, 128);
    
    const exp1 = [
      '• Recently completed General Assembly\'s fulltime Software Engineering Immersive, transitioning from design to fullstack development.',
      '• Tech Stack: JavaScript, React, Node.js, Express, Python, Django, PostgreSQL, MongoDB, REST APIs',
      '• Built and deployed multiple fullstack apps, collaborated in Agile teams, and combined design background with development.',
      '• Spearheaded the development of a dynamic, responsive web application, integrating RESTful APIs with a focus on UI/UX design.'
    ];
    
    let yPos = 135;
    exp1.forEach(line => {
      const wrappedText = doc.splitTextToSize(line, 165);
      doc.text(wrappedText, 25, yPos);
      yPos += wrappedText.length * 6;
    });
    
    // Add education and skills on page 2
    doc.addPage();
    
    // Education
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Education', 20, 20);
    doc.line(20, 22, 190, 22);
    
    doc.setFontSize(12);
    doc.text('Software Engineering Immersive', 20, 30);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('General Assembly | March 2025', 20, 37);
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Bachelor\'s degree, Digital and Multimedia', 20, 47);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Soft School | July 2014', 20, 54);
    
    // Save the PDF
    doc.save('Yassine_Chikar_Resume.pdf');
  };

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
          <div className="resume-header-container">
            <h2 className="section-title">Resume</h2>
            <button 
              onClick={handleDownloadClick}
              className="btn btn-download"
            >
              <FiDownload /> Download PDF
            </button>
          </div>

          <div className="resume-paper">
            <div className="resume-header">
              <div className="resume-name-title">
                <h1>Yassine Chikar</h1>
                <h2>Software Engineer</h2>
              </div>
              <div className="resume-contact-info">
                <p><FiMapPin /> Edinburgh, Scotland, UK</p>
                <p><FiMail /> yassine.chikar@outlook.com</p>
                <p><FiPhone /> +44 7778 316718</p>
                <p><FiLinkedin /> linkedin.com/in/yassinechikar</p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Professional Summary</h3>
              <div className="resume-content-block">
                <p>
                  Junior software engineer with a strong background in design and years of freelance experience in branding, packaging, and UI/UX. Recently transitioned into tech after completing General Assembly's Software Engineering Immersive, focusing on full-stack development. With a creative eye and solid technical skills, I build clean, user-friendly web apps using JavaScript, React, Node.js, and Python.
                </p>
              </div>
            </div>

            <div className="resume-section">
              <h3>Professional Experience</h3>
              
              <div className="resume-item">
                <div className="resume-item-header">
                  <div className="job-title-company">
                    <h4>Aspiring Junior Software Engineer | UI-Focused Developer</h4>
                    <span className="company">General Assembly UK & Europe</span>
                  </div>
                  <div className="job-period-location">
                    <span className="date">December 2024 - Present</span>
                    <span className="location">United Kingdom · Remote</span>
                  </div>
                </div>
                <div className="resume-content-block">
                  <ul>
                    <li>Recently completed General Assembly's fulltime Software Engineering Immersive, transitioning from design to fullstack development.</li>
                    <li><strong>Tech Stack:</strong> JavaScript, React, Node.js, Express, Python, Django, PostgreSQL, MongoDB, REST APIs</li>
                    <li><strong>Tools:</strong> Git/GitHub, Postman, Heroku, Netlify, EJS, Agile</li>
                    <li>Built and deployed multiple fullstack apps, collaborated in Agile teams, and combined design background with development to create functional, user-centered web apps.</li>
                    <li>Spearheaded the development of a dynamic, responsive web application, integrating RESTful APIs with a focus on UI/UX design, enhancing user engagement by 30%.</li>
                  </ul>
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div className="job-title-company">
                    <h4>Freelance Graphic Designer</h4>
                    <span className="company">Self Employed</span>
                  </div>
                  <div className="job-period-location">
                    <span className="date">September 2012 - May 2019</span>
                    <span className="location">Marrakesh-Safi, Morocco · Remote</span>
                  </div>
                </div>
                <div className="resume-content-block">
                  <ul>
                    <li>Worked with clients across industries to create impactful branding, packaging, and marketing assets that elevate brand identities and drive results.</li>
                    <li><strong>Specialties:</strong> Branding & logo design, Packaging (cosmetics, supplements, food), Social media & digital assets, Print materials</li>
                    <li>Handled projects from concept to delivery, ensuring creative solutions, clear communication, and on-time results.</li>
                    <li><strong>Tools:</strong> Adobe Illustrator, Photoshop, InDesign, Figma, Canva</li>
                  </ul>
                </div>
              </div>

              <div className="resume-item">
                <div className="resume-item-header">
                  <div className="job-title-company">
                    <h4>Web Integrator & UI Designer</h4>
                    <span className="company">WEB STUDIO AGENCY</span>
                  </div>
                  <div className="job-period-location">
                    <span className="date">January 2013 - February 2014</span>
                    <span className="location">Marrakesh-Safi, Morocco · On-site</span>
                  </div>
                </div>
                <div className="resume-content-block">
                  <ul>
                    <li>Transformed design elements into fully functional web pages, combining creativity with technical skills for a seamless user experience.</li>
                    <li><strong>Key Responsibilities:</strong> UI Design, Front-End Development, Collaboration, Responsive Design</li>
                    <li><strong>Key Skills Developed:</strong> Frontend development (HTML5, CSS3, JavaScript), Collaboration in multidisciplinary teams</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="resume-two-column">
              <div className="resume-left-column">
                <div className="resume-section">
                  <h3>Education</h3>
                  
                  <div className="resume-item">
                    <div className="resume-item-header">
                      <div className="education-degree">
                        <h4>Software Engineering Immersive</h4>
                        <span className="institution">General Assembly</span>
                      </div>
                      <span className="date">March 2025</span>
                    </div>
                  </div>
                  
                  <div className="resume-item">
                    <div className="resume-item-header">
                      <div className="education-degree">
                        <h4>Bachelor's degree, Digital and Multimedia</h4>
                        <span className="institution">Soft School</span>
                      </div>
                      <span className="date">July 2014</span>
                    </div>
                  </div>
                  
                  <div className="resume-item">
                    <div className="resume-item-header">
                      <div className="education-degree">
                        <h4>Diploma in Graphic Design</h4>
                        <span className="institution">Quasar Institute</span>
                      </div>
                      <span className="date">July 2013</span>
                    </div>
                  </div>
                </div>
                
                <div className="resume-section">
                  <h3>Technical Skills</h3>
                  <div className="resume-content-block">
                    <div className="skills-category">
                      <h4>Languages & Frameworks</h4>
                      <div className="skills-list">
                        <span>JavaScript</span>
                        <span>React.js</span>
                        <span>Node.js</span>
                        <span>Express.js</span>
                        <span>Python</span>
                        <span>Django</span>
                        <span>HTML/CSS</span>
                      </div>
                    </div>
                    
                    <div className="skills-category">
                      <h4>Design Tools</h4>
                      <div className="skills-list">
                        <span>Figma</span>
                        <span>Adobe XD</span>
                        <span>Photoshop</span>
                        <span>Illustrator</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="resume-right-column">
                <div className="resume-section">
                  <h3>Additional Skills</h3>
                  <div className="resume-content-block">
                    <div className="skills-category">
                      <h4>Development</h4>
                      <div className="skills-list">
                        <span>RESTful APIs</span>
                        <span>PostgreSQL</span>
                        <span>MongoDB</span>
                        <span>Git/GitHub</span>
                        <span>Responsive Design</span>
                      </div>
                    </div>
                    
                    <div className="skills-category">
                      <h4>Design</h4>
                      <div className="skills-list">
                        <span>UI/UX Design</span>
                        <span>Typography</span>
                        <span>Branding</span>
                        <span>Visual Communication</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="resume-section">
                  <h3>Languages</h3>
                  <div className="resume-content-block">
                    <ul className="language-list">
                      <li><strong>English:</strong> Fluent</li>
                      <li><strong>French:</strong> Conversational</li>
                      <li><strong>Arabic:</strong> Native</li>
                    </ul>
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
