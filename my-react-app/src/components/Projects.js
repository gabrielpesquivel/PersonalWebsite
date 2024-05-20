import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>Room defense system using C++, Python, Arduino, HTML</li>
        <li>Hand/finger tracking software using openCV and media pipe</li>
        <li>Personal website development using HTML and CSS</li>
      </ul>
      <p>
        Find these projects on my <a href="https://github.com/gabidonprime">GitHub</a> or reach out to me for my engineering portfolio document.
      </p>
    </section>
  );
}

export default Projects;
