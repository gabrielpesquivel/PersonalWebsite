import React, { useEffect, useRef } from 'react';
import '../styles/About.css';
import { animate } from "motion";

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
              I'm Gabriel, Co-Founder and COO of BootInk, based in Sydney.
              <br /><br />
              Before BootInk, I led engineering at Ladder and worked on Data & AI consulting at EY. That mix taught me how enterprises build with rigor and how startups move with speed. BootInk is where I put both to work.
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
