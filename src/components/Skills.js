import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = {
    "Languages": ["Python", "C", "C++", "Java", "JavaScript", "Assembly", "Matlab"],
    "Frontend": ["React", "Svelte", "HTML", "CSS"],
    "Backend & Frameworks": ["Flask", "Node.js", "Django", "npm"],
    "AI & Machine Learning": ["PyTorch", "Keras", "OpenCV"],
    "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker", "Git", "WatsonX"]
  };

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="category-title">{category}</h3>
            <div className="skill-pills">
              {skills.map((skill, index) => (
                <div key={index} className="skill-pill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
