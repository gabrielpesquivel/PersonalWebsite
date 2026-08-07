import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import '../styles/Experience.css';
import mercuryImage from './Images/mercury.jpeg';
import sunswiftImage from './Images/sunswift.png';
import EYImage from './Images/EY.png';
import LadderImage from './Images/Ladder.svg';
import BootInkImage from './Images/BootInk.png';

function Experience() {
  const [goToSlide, setGoToSlide] = useState(0);

  const experiences = [
    { image: BootInkImage, name: 'BootInk', role: 'Co-Founder & COO', years: 'Current' },
    { image: LadderImage, name: 'Ladder', role: 'Lead Software Engineer', years: '2025', darkLogo: true },
    { image: EYImage, name: 'EY', role: 'AI & Data Technology Consultant Vacationer', years: '2024 - 2025' },
    { image: sunswiftImage, name: 'Sunswift', role: 'Embedded Systems Software Engineer', years: '2024' },
    { image: mercuryImage, name: 'Mercury', role: 'Intern Mechatronic Engineer', years: '2022 - 2024' },
  ];

  const slides = experiences.map((exp, index) => ({
    key: index + 1,
    content: (
      <div className="slide-content">
        <div className={`logo-box${exp.darkLogo ? ' logo-box--dark' : ''}`}>
          <img src={exp.image} alt={exp.name} />
        </div>
        <div className="experience-text">
          <h3>{exp.name}</h3>
          <p>{exp.role}</p>
          <span className="experience-years">{exp.years}</span>
        </div>
      </div>
    ),
  }));

  const handlePrev = () => {
    setGoToSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setGoToSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="carousel-wrapper">
        <button className="carousel-nav-btn prev-btn" onClick={handlePrev}>
          ‹
        </button>
        <div className="experience-carousel-container" style={{ width: '100%', maxWidth: '600px', height: '300px', margin: '0 auto' }}>
          <Carousel slides={slides} goToSlide={goToSlide} offsetRadius={2} showNavigation={false} animationConfig={config.gentle} />
        </div>
        <button className="carousel-nav-btn next-btn" onClick={handleNext}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Experience;
