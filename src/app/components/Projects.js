'use client';
import Image from 'next/image';
import './Projects.css';

export default function Projects() {
  // Example project data (replace with your actual project details)
  const projects = [
    {
      id: 1,
      title: 'Project Title 1',
      description: 'A brief description of the project goes here. It should highlight the main features and technologies used.',
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Project Title 2',
      description: 'A brief description of the project goes here. It should highlight the main features and technologies used.',
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Project Title 3',
      description: 'A brief description of the project goes here. It should highlight the main features and technologies used.',
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Project Title 4',
      description: 'A brief description of the project goes here. It should highlight the main features and technologies used.',
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
    {
      id: 5,
      title: 'Project Title 5',
      description: 'A brief description of the project goes here. It should highlight the main features and technologies used.',
      imageSrc: '/res/proj.jpg',
      viewLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="section-container">
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} Screenshot`}
                  width={300} // Adjust based on your image dimensions
                  height={200} // Adjust based on your image dimensions
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.viewLink} className="project-link">View Project</a>
                  <a href={project.githubLink} className="project-link">GitHub Repo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}