'use client';
import Image from 'next/image';
import './Projects.css';
import { motion } from "framer-motion";
import React from 'react';
import PropTypes from 'prop-types';

// Reuse the same animation variants from About section for consistency
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
// Reusable animated component
const AnimatedSection = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
    variants={fadeIn}
    className={className}
  >
    {children}
  </motion.div>
);

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default function Projects() {
  const projects = [
  {
    id: 1,
    title: 'Vulnerability Assessment Report',
    description: 'Conducted a vulnerability assessment on a Linux server with MySQL, focusing on access controls over three months using NIST SP 800-30 Rev. 1. Identified risks from networking, software faults, and OS vulnerabilities, recommending multi-factor authentication, regular software updates, and least privilege principles.',
    tags: ['Cybersecurity', 'NIST SP 800-30', 'MySQL', 'Linux', 'Risk Assessment'],
    imageSrc: '/res/vulassesreport.jpg',
    viewLink: 'https://drive.google.com/file/d/14q7PrwTniWEdW6UNArhrN4vpSvvjvGkL/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'File Permissions in Linux',
    description: 'Secured file permissions for a research team’s directory in a large organization. Used ls -la to check permissions, modified file and directory access (e.g., chmod 440 for hidden files, chmod 700 for directories) to restrict unauthorized access while ensuring compliance with security policies.',
    tags: ['Linux', 'File Permissions', 'Cybersecurity', 'chmod'],
    imageSrc: '/res/filepermlinux.jpg',
    viewLink: 'https://drive.google.com/file/d/1AQDwqZB4vozA8ceMVbjCrqo839TCTdDd/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Incident Report Analysis',
    description: 'Analyzed a DDoS attack on a social media marketing organization’s network caused by ICMP packet flooding. Implemented firewall rules, IP verification, and IDS/IPS systems to mitigate and detect future attacks, following NIST framework guidelines.',
    tags: ['Cybersecurity', 'DDoS', 'NIST', 'Firewall', 'IDS/IPS'],
    imageSrc: '/res/incidentreport.jpg',
    viewLink: 'https://drive.google.com/file/d/1iPDWxpLiMIsp2lgwRs3Lw7ov0q5JU2Ca/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 4,
    title: 'Algorithm for File Updates in Python',
    description: 'Developed a Python script to manage an allow list of IP addresses for a healthcare company. The script reads, updates, and removes IP addresses from a file, ensuring only authorized access to restricted content, enhancing security automation.',
    tags: ['Python', 'Cybersecurity', 'File Management', 'IP Allow List'],
    imageSrc: '/res/algoforfileupdate.jpg',
    viewLink: 'https://drive.google.com/file/d/164E5xTfD6Ji1_WQAHh15sSU_d9IsAw-h/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 5,
    title: 'Incident Handler’s Journal',
    description: 'Documented a ransomware incident at a U.S. healthcare clinic caused by phishing emails. Captured the 5 W’s (Who, What, When, Where, Why) and noted operational disruptions due to encrypted system files, highlighting the need for employee awareness training.',
    tags: ['Cybersecurity', 'Ransomware', 'Incident Response', 'Phishing'],
    imageSrc: '/res/incidenthandlar.jpg',
    viewLink: 'https://drive.google.com/file/d/1ZLBaDgNBxXDFSg4Ef10IxynrNfYI9ifc/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 6,
    title: 'Apply Filters to SQL Queries',
    description: 'Analyzed a SQL database to identify security issues in login attempts and employee access for a large organization. Wrote queries to filter failed logins after hours, specific dates, non-Mexico origins, and employees in Marketing, Sales, Finance, or non-IT departments.',
    tags: ['SQL', 'Cybersecurity', 'Database Security', 'Query Optimization'],
    imageSrc: '/res/applyfilsql.jpg',
    viewLink: 'https://drive.google.com/file/d/1CQbC3WAePDqdUmq2ZRPrhoe_1pbn-1cj/view?usp=sharing',
    githubLink: '#',
  },
  {
    id: 7,
  title: 'Full Stack Personal Branding Website',
  description: 'Designed and built a complete personal branding site with blogs, portfolio, store, e-book selling features, and responsive design. Includes dark mode and animation.',
  tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
  imageSrc: '/res/mywebsite.png',
  viewLink: 'https://mywebsite-frontend-nu.vercel.app/', // Replace with actual domain if hosted
  githubLink: 'https://github.com/adishankardas/mywebsite-frontend', // Replace with actual repo
  },
  {
    id: 8,
 title: 'AstroShine – Astrology Web App',
  description: 'Developed a full-stack astrology platform featuring horoscope generation, birth chart insights, blogs, and e-commerce integration. Includes blog search, donations, and authentication.',
  tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySql'],
  imageSrc: '/res/astroshine.png',
  viewLink: 'https://astroshine.in/', // Replace with actual link if deployed
  githubLink: '#', // Replace with actual repo
  },
  {
    id: 9,
    title: 'AI Voice Assistant (JARVIS)',
    description: 'Created an AI Voice Assistant named JARVIS using Python, capable of performing various tasks. Demo available at https://www.youtube.com/watch?v=Rj0cIZXcwk8.',
    tags: ['Python', 'AI', 'Voice Assistant'],
    imageSrc: '/res/aivoiceasss.png',
    viewLink: 'https://www.youtube.com/watch?v=Rj0cIZXcwk8',
    githubLink: '#',
  },
  {
    id: 10,
    title: 'Snake Game with FPS',
    description: 'Developed a Snake Game with FPS using Python, featuring a classic snake game experience with enhanced performance. Demo available at https://www.youtube.com/watch?v=mWdsj895CtQ.',
    tags: ['Python', 'AI', 'Voice Assistant'],
    imageSrc: '/res/snakegame.png',
    viewLink: 'https://www.youtube.com/watch?v=mWdsj895CtQ',
    githubLink: 'https://github.com/adishankardas/My_New_Snake_Game_With-_FPS',
  },
  {
    id: 11,
    title: 'Windows 11 UI',
    description: 'Designed a Microsoft Windows 11 UI using HTML5, CSS, and JavaScript, focusing on UI/UX and front-end development. View at https://aadishankardas.github.io/Windows11.github.io/.',
    tags: ['HTML5', 'CSS', 'JavaScript', 'UI/UX', 'Front-End Development'],
    imageSrc: '/res/win11.png',
    viewLink: 'https://adishankardas.github.io/Windows11.github.io/',
    githubLink: 'https://github.com/adishankardas/Windows11.github.io',
  },
  {
    id: 12,
    title: 'Front-End Website Design',
    description: 'Built a front-end website for a laptop store using HTML5, CSS, and JavaScript, emphasizing web development and user experience. View at https://adishankardas.github.io/LaptopStore.github.io/.',
    tags: ['HTML5', 'CSS', 'JavaScript', 'Web Development', 'Front-End Development'],
    imageSrc: '/res/frontendwebdesign.png',
    viewLink: 'https://adishankardas.github.io/LaptopStore.github.io/',
    githubLink: 'https://github.com/adishankardas/LaptopStore.github.io',
  },
  {
  id: 13,
  title: 'Advanced TODO App with Drag & Drop',
  description: 'Designed and built a powerful TODO web app featuring drag-and-drop functionality, multi-project management, editable tasks, and real-time task movement across columns. Built using React, Zustand, and Tailwind CSS. Deployed with Vercel.',
  tags: ['React', 'Zustand', 'Tailwind CSS', 'TypeScript', 'Drag & Drop'],
  imageSrc: '/res/todoapp.png',
  viewLink: 'https://todo-app-nine-iota-50.vercel.app/',
  githubLink: 'https://github.com/adishankardas/todo-app', // replace if your repo URL is different
},

];

  return (
    <section id="projects" className="projects-section">
      <motion.div 
        className="section-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
<h2 className="section-title">
  <span className="section-title-main">My</span>{' '}
  <span className="section-title-highlight">Projects</span>
</h2>        <p className="section-subtitle">A collection of my recent work and contributions</p>
      </motion.div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            className="project-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <div className="card-header">
              <div className="project-image-container">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Screenshot`}
                  width={400}
                  height={250}
                  className="project-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            
            <div className="card-footer">
              <div className="project-links">
                <a href={project.viewLink} className="link-button demo"
                target="_blank"
      rel="noopener noreferrer">
                  <span>Live Demo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6V18H18V14M10 14L20 4M20 4V10M20 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={project.githubLink} className="link-button code"
                target="_blank"
      rel="noopener noreferrer">
                  <span>View Code</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}