import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutImage from './Images/profile.jpeg';
import { stagger, animate } from "motion";

function About() {
  const h2Ref = useRef(null);
  const imgRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

  useEffect(() => {
    animate(h2Ref.current, { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: 0.5 });
    animate(imgRef.current, { scale: [0.8, 1], opacity: [0, 1] }, { duration: 0.5, delay: 0.7 });
    animate([p1Ref.current, p2Ref.current, p3Ref.current], { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.2, { start: 0.9 }) });
  }, []);

  return (
    <section id="about" className="about">
      <h2 ref={h2Ref} style={{ opacity: 0 }}>About Me</h2>
      <div className="about-content">
        <img ref={imgRef} src={aboutImage} alt="About Me" className="about-image" style={{ opacity: 0 }} />
        <div className="about-text-container">
          <div className="about-text">
            <p ref={p1Ref} style={{ opacity: 0 }}>Hello and welcome to my website!</p>
            <p ref={p2Ref} style={{ opacity: 0 }}>My name is Gabriel Esquivel and I am an undergraduate student at UNSW in Sydney. I've developed this website to showcase my skills in web development and to share my projects with the world. I am passionate about technology and I am always looking for new ways to get my hands dirty and learn as I go.</p>
            <p ref={p3Ref} style={{ opacity: 0 }}>I hope you enjoy your stay. Thanks for dropping by!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
