'use client';

import './Skills.css';

export default function Skills() {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript',
    'React.js', 'Next.js', 'Node.js',
    'MongoDB', 'Python', 'Cybersecurity',
    'Git & GitHub', 'Linux', 'SQL'
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <ul className="skills-grid">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
