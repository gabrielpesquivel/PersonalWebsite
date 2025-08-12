import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-box">Languages: Python, C, C++, Java, JavaScript, Svelte, HTML, CSS, Assembly, Matlab</div>
        <div className="skill-box">Frameworks: React, Flask, npm, Node.js, Django, Pytorch, Keras, OpenCV</div>
        <div className="skill-box">DevOps & Tools: Docker, Git, Amazon Web Services (AWS), Azure, Google Cloud, WatsonX </div>
      </div>
    </section>
  );
}

export default Skills;
