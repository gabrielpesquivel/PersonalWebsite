import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        <div className="skill-box">Languages: C, C++, Java, HTML, MIPS, Python, MATLAB</div>
        <div className="skill-box">CAD Tools: SOLIDWORKS, Fusion360</div>
        <div className="skill-box">Dev Tools: Arduino, Verilog, openCV, LaTeX, GitHub, GitLab</div>
      </div>
    </section>
  );
}

export default Skills;
