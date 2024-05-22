import React from 'react';
import './About.css';
import aboutImage from './Images/profile.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src={aboutImage} alt="About Me" className="about-image" />
        <div className="about-text">
        <p> Hello and welcome to my website! </p>
        <p> My name is Gabe and I am an undergraduate student at UNSW in Sydney. I've developed this website to showcase my skills in web development and to share my projects with the world. I am passionate about technology and I am always looking for new ways to get my hands dirty and learn as I go. </p>
        <p> I hope you enjoy your stay. Thanks for dropping by! </p>
        </div>
      </div>
    </section>
  );
}

export default About;
