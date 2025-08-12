import React from 'react';
import Carousel from 'react-spring-3d-carousel';
import { config } from 'react-spring';
import './Experience.css';
import mercuryImage from './Images/mercury.jpeg';
import sunswiftImage from './Images/sunswift.png';
import EYImage from './Images/EY.png';
import NextCoinImage from './Images/NextCoin.jpg';

function Experience() {
  const slides = [
    {
      key: 1,
      content: (
        <div className="slide-content">
          <img src={NextCoinImage} alt="1" />
          <div className="experience-text">
            <h3>NextCoin</h3>
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
            <p>AI & Data Intern Technology Consultant</p>
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

  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div style={{ width: '80%', height: '300px', margin: '0 auto' }}>
        <Carousel slides={slides} goToSlide={0} offsetRadius={2} showNavigation={true} animationConfig={config.gentle} />
      </div>
    </section>
  );
}

export default Experience;
