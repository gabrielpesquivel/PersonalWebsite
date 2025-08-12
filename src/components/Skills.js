import React, { useState, useEffect } from 'react';
import './Skills.css';
import Carousel from 'react-spring-3d-carousel';

function Skills() {
  const [goToSlide, setGoToSlide] = useState(0);

  const skills = [
    "Python", "C", "C++", "Java", "JavaScript", "Svelte", "HTML", "CSS", "Assembly", "Matlab",
    "React", "Flask", "npm", "Node.js", "Django", "Pytorch", "Keras", "OpenCV",
    "Docker", "Git", "Amazon Web Services (AWS)", "Azure", "Google Cloud", "WatsonX"
  ];

  const slides = skills.map((skill, index) => {
    return {
      key: index,
      content: <div className="skill-box">{skill}</div>
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGoToSlide(prev => (prev + 1) % skills.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [skills.length]);

  return (
    <section id="skills" className="skills">
      <h2>Technical Skills</h2>
      <div style={{ width: '80%', height: '200px', margin: '20px auto' }}>
        <Carousel slides={slides} goToSlide={goToSlide} offsetRadius={2} showNavigation={false} />
      </div>
    </section>
  );
}

export default Skills;
