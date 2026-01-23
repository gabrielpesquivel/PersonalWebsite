import React, { useState } from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Experience.css';
import mercuryImage from './Images/mercury.jpeg';
import sunswiftImage from './Images/sunswift.png';
import EYImage from './Images/EY.png';
import LadderImage from './Images/Ladder.svg';

function Experience() {
  const [goToSlide, setGoToSlide] = useState(0);

  const slides = [
    {
      key: 1,
      content: (
        <div className="slide-content">
          <img src={LadderImage} alt="1" />
          <div className="experience-text">
            <h3>Ladder</h3>
            <p>Lead Software Engineer</p>
          </div>
        </div>
      ),
    },
    {
      key: 2,
      content: (
        <div className="slide-content">
          <img src={EYImage} alt="2" />
          <div className="experience-text">
            <h3>EY</h3>
            <p>AI & Data Technology Consultant Vacationer</p>
          </div>
        </div>
      ),
    },
    {
      key: 3,
      content: (
        <div className="slide-content">
          <img src={sunswiftImage} alt="3" />
          <div className="experience-text">
            <h3>Sunswift</h3>
            <p> Embedded Systems Software Engineer</p>
          </div>
        </div>
      ),
    },
    {
      key: 4,
      content: (
        <div className="slide-content">
          <img src={mercuryImage} alt="4" />
          <div className="experience-text">
            <h3>Mercury</h3>
            <p>Intern Mechatronic Engineer</p>
          </div>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => console.log(`Clicked on slide ${index + 1}`) };
  });

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
