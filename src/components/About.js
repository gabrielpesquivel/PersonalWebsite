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
            <p ref={p2Ref} style={{ opacity: 0 }}>What's up! I'm Gabe, a software engineer who enjoys building and exploring with new technology. I made this website to explore web development and share with anyone curious about what I am up to. I'm typically quite backend leaning, so I hope to develop my frontend skills with time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
