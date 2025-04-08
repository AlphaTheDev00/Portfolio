import { jsPDF } from 'jspdf';

export const generateResumePDF = () => {
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
  const summary = 'Junior software engineer with a strong background in design and years of freelance experience in branding, packaging, and UI/UX. Recently transitioned into tech after completing General Assembly's Software Engineering Immersive, focusing on full-stack development. With a creative eye and solid technical skills, I build clean, user-friendly web apps using JavaScript, React, Node.js, and Python.';
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
    '• Recently completed General Assembly's fulltime Software Engineering Immersive, transitioning from design to fullstack development.',
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
  
  // Second job
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Freelance Graphic Designer', 20, yPos + 5);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Self Employed', 20, yPos + 12);
  doc.text('September 2012 - May 2019 | Marrakesh-Safi, Morocco · Remote', 20, yPos + 18);
  
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
  doc.text('Bachelor's degree, Digital and Multimedia', 20, 47);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Soft School | July 2014', 20, 54);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Diploma in Graphic Design', 20, 64);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Quasar Institute | July 2013', 20, 71);
  
  // Skills
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Technical Skills', 20, 90);
  doc.line(20, 92, 190, 92);
  
  doc.setFontSize(12);
  doc.text('Languages & Frameworks', 20, 100);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('JavaScript, React.js, Node.js, Express.js, Python, Django, HTML/CSS, RESTful APIs', 20, 107);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Design Tools', 20, 117);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Figma, Adobe XD, Photoshop, Illustrator, InDesign', 20, 124);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Additional Skills', 20, 134);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('UI/UX Design, Responsive Design, Git/GitHub, MongoDB, PostgreSQL, Agile Methodologies', 20, 141);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Languages', 20, 151);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('English (Fluent), French (Conversational), Arabic (Native)', 20, 158);
  
  return doc.output('blob');
};

export default generateResumePDF;
