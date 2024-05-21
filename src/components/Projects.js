import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <p> All the codebases for my personal projects can be find on my <a href="https://github.com/gabidonprime">GitHub</a>! Otherwise please reach out to me for my portfolio document.</p>
      <ul>
        <li>1. A Room defense system using an Arduino to detect and deter intruders</li>
        <li>2. Hand-tracking software in Python (openCV and media pipe) to undergo a number of actions depending on the position of the hand</li>
        <li>3. and many more!</li>
      </ul>
    </section>
  );
}

export default Projects;
