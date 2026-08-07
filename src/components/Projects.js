import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import '../styles/Projects.css';
import BootShowroomImage from './Images/bootroom.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'BootInk 3D Boot Showroom',
      description: 'An interactive 3D showroom where users can explore and customise boots in a virtual environment.',
      image: BootShowroomImage,
      technologies: ['Three.js', 'React', 'WebGL'],
      link: 'https://3d.bootink.com',
      isUnderConstruction: false,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.isUnderConstruction ? 'under-construction' : ''}`}>
            <div className="project-image-container">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <span className="visit-badge">
                    Visit live site <FiArrowUpRight aria-hidden="true" />
                  </span>
                </a>
              ) : (
                <img src={project.image} alt={project.title} className="project-image" />
              )}
              {project.isUnderConstruction && (
                <div className="coming-soon-badge">Coming Soon</div>
              )}
            </div>
            <div className="project-content">
              <h3>
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                ) : (
                  project.title
                )}
              </h3>
              <p>{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
