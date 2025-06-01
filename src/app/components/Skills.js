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
            skills: ["JavaScript", "Python", "Java"]
          },
          {
            icon: "🧩",
            title: "Framework / Library",
            skills: ["React.js", "Bootstrap", "jQuery"]
          },
          {
            icon: "🌐",
            title: "Web & Database",
            skills: ["Tailwind CSS", "HTML5", "CSS3", "MongoDB", "Node.js", "AWS", "Docker"]
          },
          {
            icon: "🛠️",
            title: "Tool",
            skills: ["Git", "GitHub", "VS Code", "Canva", "PyCharm", "Webpack", "IntelliJ IDEA"]
          },
          {
            icon: "☁️",
            title: "Cloud & DevOps",
            skills: ["AWS EC2", "SSL Configuration"]
          },
          {
            icon: "📝",
            title: "Development Methodology",
            skills: ["Agile Practices", "Unit Testing (JUnit)"]
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