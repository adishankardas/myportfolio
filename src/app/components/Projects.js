'use client';
import Image from 'next/image';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product filtering, cart system, and Stripe integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'Modern portfolio built with Next.js featuring animations, dark/light mode, and responsive design.',
      tags: ['Next.js', 'Framer Motion', 'CSS Modules'],
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Productivity application with drag-and-drop functionality, real-time updates, and user authentication.',
      tags: ['TypeScript', 'Firebase', 'React DnD'],
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Interactive weather application using OpenWeather API with 5-day forecasts and location search.',
      tags: ['API Integration', 'Chart.js', 'Geolocation'],
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'AI Image Generator',
      description: 'Web application that generates images using Stable Diffusion API with custom prompt inputs.',
      tags: ['AI', 'Python', 'Flask'],
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">A collection of my recent work and contributions</p>
      </div>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
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
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
            
            <div className="card-footer">
              <div className="project-links">
                <a href={project.viewLink} className="link-button demo">
                  <span>Live Demo</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 6H6V18H18V14M10 14L20 4M20 4V10M20 4H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href={project.githubLink} className="link-button code">
                  <span>View Code</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}