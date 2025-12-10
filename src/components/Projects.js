import React from 'react';
import './Projects.css';
import CVDemoImage from './Images/CVDemo.png';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Gesture Recognition with Real Time Hand Tracking',
      description: 'Developed a computer vision system using OpenCV2 and MediaPipe to map human hand movements and detect which finger is raised the highest. Implements real-time hand tracking and gesture recognition.',
      image: CVDemoImage,
      technologies: ['Python', 'OpenCV2', 'MediaPipe', 'Computer Vision'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
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
