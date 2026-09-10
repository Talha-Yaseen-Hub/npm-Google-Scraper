import React from 'react';
import { Github, ArrowRight } from 'lucide-react';

export default function SkillsSection() {
  const techStack = [
    { id: "01", name: "React", label: "Frontend Library" },
    { id: "02", name: "Next.js", label: "React Framework" },
    { id: "03", name: "TypeScript", label: "Type Safety" },
    { id: "04", name: "Node.js", label: "Backend Runtime" },
    { id: "05", name: "Tailwind CSS", label: "Utility-First CSS" },
    { id: "06", name: "PostgreSQL", label: "SQL Database" },
    { id: "07", name: "Figma", label: "UI/UX Design" },
    { id: "08", name: "Git & CI/CD", label: "Version Control" }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Exact TasteSkill.dev 2-Column Hero Layout */}
        <div className="skills-hero-grid">
          {/* Left Column: Headline, Paragraph, CTAs */}
          <div className="skills-content">
            <h2 className="skills-main-title">
              Works with <br />
              <em>every</em> stack.
            </h2>

            <p className="skills-subtitle">
              React, Next.js, TypeScript, Node.js, Tailwind CSS, PostgreSQL, Figma, and Git. Crafting robust, scalable web products built for modern performance.
            </p>

            <div className="skills-cta-group">
              <a href="#work" className="btn-install-cta">
                <span>Explore all skills</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="https://github.com/Talha-Yaseen-Hub" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-github-cta"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Exact Official 3D Graphic Visual Showcase */}
          <div className="skills-visual-wrapper">
            <div className="official-hero-artwork-card">
              <img 
                src="/heroimg1.webp" 
                alt="TasteSkill 3D Floating Ecosystem" 
                className="official-hero-img"
              />
            </div>
          </div>
        </div>

        {/* Bottom Tech Ribbon */}
        <div className="tech-stack-ribbon">
          <p className="ribbon-label">Core Tech Stack &amp; Frameworks</p>
          <div className="ribbon-grid">
            {techStack.map((item) => (
              <div key={item.id} className="ribbon-card">
                <span className="card-index">{item.id}</span>
                <span className="card-title">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
