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
   <section id='skills' className="skills-section">
  <h2 className="skills-title">
    Technical <span className="skills-title-highlight">Skills</span>
  </h2>
  <p className="skills-subtitle">
    Skills shaped by academic background and experience.
  </p>
  <div className="skills-unique-grid">
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon programming">{"</>"}</span>
        <span className="skill-card-title">Programming</span>
      </div>
      <div className="skill-list">
        <span>JavaScript</span>
        <span>Python</span>
        <span>Java</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon framework">🧩</span>
        <span className="skill-card-title">Framework / Library</span>
      </div>
      <div className="skill-list">
        <span>React.js</span>
        <span>Bootstrap</span>
        <span>jQuery</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon webdb">🌐</span>
        <span className="skill-card-title">Web &amp; Database</span>
      </div>
      <div className="skill-list">
        <span>Tailwind CSS</span>
        <span>HTML5</span>
        <span>CSS3</span>
        <span>MongoDB</span>
        <span>Node.js</span>
        <span>AWS</span>
        <span>Docker</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon tool">🛠️</span>
        <span className="skill-card-title">Tool</span>
      </div>
      <div className="skill-list">
        <span>Git</span>
        <span>GitHub</span>
        <span>VS Code</span>
        <span>Canva</span>
        <span>PyCharm</span>
        <span>Webpack</span>
        <span>IntelliJ IDEA</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon cloud">☁️</span>
        <span className="skill-card-title">Cloud &amp; DevOps</span>
      </div>
      <div className="skill-list">
        <span>AWS EC2</span>
        <span>SSL Configuration</span>
      </div>
    </div>
    <div className="skill-card">
      <div className="skill-card-header">
        <span className="skill-icon devmethod">📝</span>
        <span className="skill-card-title">Development Methodology</span>
      </div>
      <div className="skill-list">
        <span>Agile Practices</span>
        <span>Unit Testing (JUnit)</span>
      </div>
    </div>
  </div>
</section>
  );
}
