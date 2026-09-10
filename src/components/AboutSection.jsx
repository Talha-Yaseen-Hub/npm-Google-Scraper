import React from 'react';
import { Download, ArrowUpRight, Code2, Sparkles, Cpu, Layers } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { name: "React & Next.js", icon: Code2 },
    { name: "UI/UX Architecture", icon: Sparkles },
    { name: "Node.js & APIs", icon: Cpu },
    { name: "Motion & Micro-interactions", icon: Layers }
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "40+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span className="eyebrow-text">01 // ABOUT ME</span>
        </div>

        <div className="about-grid">
          {/* Left Column: Image Card & Stat Counters */}
          <div className="about-left-col">
            <div className="profile-card">
              <div className="status-badge">
                <span className="status-dot"></span>
                <span>Available for New Projects</span>
              </div>
              <img 
                src="/about_profile.jpg" 
                alt="Developer Profile" 
                className="profile-img"
              />
            </div>

            {/* Quick Stats Row */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Bio & Core Expertise */}
          <div className="about-right-col">
            <h2 className="about-title">
              Bridging Creative Vision with <em>Modern Code</em>
            </h2>

            <p className="about-bio">
              I am a full-stack web developer and UI/UX craftsman dedicated to building clean, intuitive, and high-performance digital products. With a keen eye for modern editorial design and solid software engineering principles, I craft web applications that leave a lasting impression.
            </p>

            <p className="about-bio-sub">
              Whether architecting complex frontend component systems or optimizing back-end API pipelines, I focus on delivering seamless, delightful user experiences across all devices.
            </p>

            {/* Expertise Pills */}
            <div className="skills-container">
              <h3 className="skills-heading">Core Expertise</h3>
              <div className="skills-chips">
                {skills.map((skill, idx) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={idx} className="skill-chip">
                      <IconComponent size={16} className="skill-icon" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="about-actions">
              <a href="#contact" className="cta-primary-btn">
                <span>Let's Work Together</span>
                <ArrowUpRight size={18} />
              </a>
              <button 
                className="cta-secondary-btn"
                onClick={() => alert("Resume download started!")}
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
