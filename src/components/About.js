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
              I am a Backend Software Engineer based in Sydney with a unique blend of enterprise and startup experience.
            </p>
            <p>
              My background spans from navigating complex Data & AI consulting projects at EY to driving product development as a Lead Software Engineer at Ladder.inc. This background allows me to blend the rigor and structure of enterprise engineering with the agility and ownership required in startup environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
