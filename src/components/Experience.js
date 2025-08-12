import React from 'react';
import './Experience.css';
import mercuryImage from './Images/mercury.jpeg';
import sunswiftImage from './Images/sunswift.png';
import EYImage from './Images/EY.png';
import NextCoinImage from './Images/NextCoin.jpg';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
        <div className="experience-item">
        <img src={NextCoinImage} alt="NC" className="experience-image" />
        <div className="experience-content-wrapper">
          <div className="experience-content">
            <h3>Lead Software Engineer </h3>
            <p>September 2025 – Current</p>
            <p>NextCoin, UNSW Founders 10x Program</p>
            <ul>
              <li>Leading the end-to-end development of the platform, overseeing a team of engineers across the fullstack.</li>
              <li>Architecting and building a scalable solution with machine learning powered matching.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience-item">
        <img src={EYImage} alt="EY" className="experience-image" />
        <div className="experience-content-wrapper">
          <div className="experience-content">
            <h3>AI and Data Technology Consultant - Vacationer Program </h3>
            <p>November 2024 – January 2025</p>
            <p>Ernst & Young (EY), George St</p>
            <ul>
              <li>Developed a cloud-hosted AI tool to increase efficiency of an insurance companies call center operations by up to 30%, tackling Natural Language Processing and text analytics challenges.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience-item">
        <img src={sunswiftImage} alt="Sunswift Racing UNSW" className="experience-image" />
        <div className="experience-content-wrapper">
          <div className="experience-content">
            <h3>Embedded Systems Software Engineer</h3>
            <p>January 2024 – Present</p>
            <p>Sunswift Racing UNSW, Kensington</p>
            <ul>
              <li>Developed software for onboard sensors and embedded electronic devices to improve the performance and reliability of a multi-world-record holding solar car. </li>
              <li> Collaborated with an interdisciplinary team of 75 people to push the boundaries of solar vehicle technology. </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="experience-item">
        <img src={mercuryImage} alt="Mercury Innovation" className="experience-image" />
        <div className="experience-content-wrapper">
          <div className="experience-content">
            <h3>Mechatronic Engineer Intern</h3>
            <p>November 2021 – August 2024</p>
            <p>Mercury Innovation Pty Ltd, Smithfield, NSW</p>
            <ul>
              <li>Designed functional solutions in Fusion & SOLIDWORKS to key robotics challenges faced within client projects. </li>
              <li> Developed commuter-tracking capabilities on the next generation of digital parking signage</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
