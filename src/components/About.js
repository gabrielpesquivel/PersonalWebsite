import React, { useEffect, useRef } from 'react';
import './About.css';
import { stagger, animate } from "motion";

function About() {
  const h2Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    animate(h2Ref.current, { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: 0.5 });
    animate(p2Ref.current, { y: [20, 0], opacity: [0, 1] }, { duration: 0.5, delay: 0.9 });
  }, []);

  return (
    <section id="about" className="about">
      <h2 ref={h2Ref} style={{ opacity: 0 }}>About Me</h2>
      <div className="about-content">
        <div className="about-text-container">
          <div className="about-text">
            <p ref={p2Ref} style={{ opacity: 0 }}>
              I sit at the intersection of hardware and intelligent software. As a dual-degree student in Mechatronic Engineering and Computer Science at UNSW, I am passionate about building systems that interact with the real world.
              <br /><br />
              Currently, I am the Lead Software Engineer at Ladder, where I lead a team building a scalable fintech platform to change the way young professionals enter the workforce.
              <br /><br />
              My background spans:
              <br />
              • Embedded Systems: Developing embedded systems for Sunswift Racing's world-record solar car.
              <br />
              • Enterprise AI: Delivering cloud-hosted NLP solutions at EY.
              <br />
              • Robotics: Designing CAD assemblies at Mercury Innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
