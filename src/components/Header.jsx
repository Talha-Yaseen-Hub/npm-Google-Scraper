import React from 'react';
import { Github, Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="header-wrapper">
      {/* Left Logo Pill */}
      <div className="logo-pill">
        <div className="logo-icon-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
        <span className="logo-text">Alex Vance</span>
      </div>

      {/* Right Floating Nav Pill */}
      <nav className="nav-pill">
        <ul className="nav-links">
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#work" className="nav-link">Work</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button className="nav-badge-btn" onClick={() => window.open('https://github.com', '_blank')}>
          <Github size={16} />
          <span>86,012</span>
          <span className="star-icon">★</span>
        </button>
      </nav>
    </header>
  );
}
