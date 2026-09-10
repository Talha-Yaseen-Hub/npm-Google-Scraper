import React from 'react';
import { Github } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Creative Developer <em>Portfolio</em>
        </h1>
        <div className="hero-accent-line"></div>
        <p className="hero-description">
          Specializing in high-craft digital experiences, modern web architecture, and interactive design. Crafting interfaces that balance precision, aesthetic beauty, and smooth performance.
        </p>
        <a href="#work" className="cta-button">
          <Github size={18} />
          <span>Explore Portfolio</span>
        </a>
      </div>

      <div className="hero-visual">
        <div className="visual-card">
          <img 
            src="/hero_sculpture.jpg" 
            alt="Minimalist Aesthetic Sculpture" 
            className="visual-img"
          />
        </div>
      </div>
    </section>
  );
}
