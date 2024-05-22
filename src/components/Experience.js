import React from 'react';
import './Experience.css';
import mercuryImage from './Images/mercury.jpeg'; // Path to your image
import sunswiftImage from './Images/sunswift.png'; // Path to your image
import unswImage from './Images/unsw.jpeg'; // Path to your image

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <img src={mercuryImage} alt="Mercury Innovation" className="experience-image" />
        <div className="experience-content">
          <h3>Mechatronic Engineer Intern</h3>
          <p>November 2021 – Present</p>
          <p>Mercury Innovation Pty Ltd, Smithfield, NSW</p>
          <ul>
            <li>Designed and modelled functional solutions in SOLIDWORKS to hardware issues.</li>
            <li>Created insightful reports identifying problems with the company's latest digital transport signage solutions.</li>
            <li>Assisted in assembly of digital transport signage to develop thorough understanding of the product and manufacturing processes.</li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <img src={sunswiftImage} alt="Sunswift Racing UNSW" className="experience-image" />
        <div className="experience-content">
          <h3>Embedded Systems Software Engineer</h3>
          <p>January 2024 – Present</p>
          <p>Sunswift Racing UNSW, Kensington</p>
          <ul>
            <li>Developing software for all sensors and electronic devices to improve the performance and reliability of a multi-world-record holding solar car.</li>
            <li>Collaborating with an interdisciplinary team of 75 people to push the boundaries of solar vehicle technology.</li>
          </ul>
        </div>
      </div>
      <div className="experience-item">
        <img src={unswImage} alt="UNSW Faculty of Engineering Student Society" className="experience-image" />
        <div className="experience-content">
          <h3>Executive</h3>
          <p>March 2021 – December 2023</p>
          <p>UNSW Faculty of Engineering Student Society, UNSW</p>
          <ul>
            <li>Produced high quality Careers-driven events for up to one hundred engineering student attendees.</li>
            <li>Liaised with representatives from our sponsorship companies to develop mutually beneficial events.</li>
            <li>Maintained compliance with university guidelines by liaising with UNSW Arc student society.</li>
            <li>Handled room bookings and club grants applications for the society.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
