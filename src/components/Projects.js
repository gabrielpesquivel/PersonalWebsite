import React from 'react';
import './Projects.css';
import CVDemoImage from './Images/CVDemo.png';
import BootShowroomImage from './Images/bootshowroom.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gesture Recognition System',
      description: 'A computer vision system to map human hand movements and detect important features with real-time hand tracking technology.',
      image: CVDemoImage,
      technologies: ['Python', 'OpenCV2', 'MediaPipe', 'Computer Vision'],
    },
    {
      id: 2,
      title: 'BootInk 3D Boot Showroom',
      description: 'An interactive 3D showroom where users can explore and customise boots in a virtual environment.',
      image: BootShowroomImage,
      technologies: ['Three.js', 'React', 'WebGL'],
      isUnderConstruction: true,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.isUnderConstruction ? 'under-construction' : ''}`}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
              {project.isUnderConstruction && (
                <div className="coming-soon-badge">Coming Soon</div>
              )}
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
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
