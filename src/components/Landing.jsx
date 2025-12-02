import React from 'react';
import '../styles/landing.css';
import CTAButton from './CTAButton';
import useParallax from './useParallax';

export default function Landing(){
  const leftRef = useParallax(0.05);
  const rightRef = useParallax(0.1);
  return (
    <section id="top" className="landing">
      <div className="container landing-grid">
        <div className="hero-content" ref={leftRef}>
          <h1 className="hero-heading">Hi, I’m Sai Kumar — a Frontend Developer</h1>
          <p className="hero-sub">I build accessible, responsive interfaces with modern JavaScript and clean UX. I like building polished web apps that feel fast and intuitive.</p>
          <div className="hero-ctas">
            <a href="#projects"><CTAButton>View Projects</CTAButton></a>
            <a href="#contact"><button className="btn cta-secondary">Get in Touch</button></a>
          </div>
        </div>

        <div className="portrait" aria-hidden ref={rightRef}>
          <img src="/src/assets/portrait.svg" alt="Portrait of Sai Kumar" loading="lazy" />
        </div>
      </div>
    </section>
  )
}
