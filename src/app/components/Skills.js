'use client';
import './Skills.css';
import { motion } from "framer-motion";
import React from 'react';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Skills() {
  return (
    <section id='skills' className="skills-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="skills-title">
          Technical <span className="skills-title-highlight">Skills</span>
        </h2>
        <p className="skills-subtitle">
          Skills shaped by academic background and experience.
        </p>
      </motion.div>

      <div className="skills-unique-grid">
        {[
  {
    icon: "</>",
    title: "Programming",
    skills: ["JavaScript", "Python", "SQL", "Bash", "PowerShell"]
  },
  {
    icon: "🧩",
    title: "Framework / Library",
    skills: ["React.js", "Bootstrap", "jQuery"]
  },
  {
    icon: "🌐",
    title: "Web & Database",
    skills: ["Tailwind CSS", "HTML5", "CSS3", "MongoDB", "Node.js", "MySQL"]
  },
  {
    icon: "🛠️",
    title: "Tool",
    skills: ["Git", "GitHub", "VS Code", "Canva", "PyCharm", "Wireshark", "Metasploit", "Nessus", "Burp Suite", "Splunk"]
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Network Security", "Incident Response", "Digital Forensics", "SIEM", "IAM"]
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    skills: ["AWS EC2", "SSL Configuration", "Docker"]
  },
  {
    icon: "📝",
    title: "Development Methodology",
    skills: ["Agile Practices", "Unit Testing (JUnit)"]
  },
  {
    icon: "🎨",
    title: "Design & Content",
    skills: ["UI/UX Design", "Content Creation", "Adobe Photoshop"]
  },
  {
    icon: "🛡️",
    title: "Security Frameworks",
    skills: ["NIST", "ISO 27001", "GDPR", "SOC 2"]
  }
].map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
            variants={fadeIn}
            transition={{ delay: index * 0.1 }}
          >
            <div className="skill-card-header">
              <span className={`skill-icon ${skill.title.toLowerCase().replace(/[^a-z]+/g, '')}`}>
                {skill.icon}
              </span>
              <span className="skill-card-title">{skill.title}</span>
            </div>
            <div className="skill-list">
              {skill.skills.map((item, i) => (
                <motion.span
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.2 + (i * 0.05) }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}