import React from 'react';
import { 
  Github, 
  ArrowRight, 
  Terminal, 
  Check, 
  Layers, 
  Palette, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  GitBranch, 
  Layout, 
  Zap, 
  Sparkles 
} from 'lucide-react';

export default function SkillsSection() {
  const techStack = [
    { id: "01", name: "React", icon: Code2 },
    { id: "02", name: "Next.js", icon: Zap },
    { id: "03", name: "TypeScript", icon: Layers },
    { id: "04", name: "Node.js", icon: Cpu },
    { id: "05", name: "Tailwind CSS", icon: Palette },
    { id: "06", name: "PostgreSQL", icon: Database },
    { id: "07", name: "Figma", icon: Layout },
    { id: "08", name: "Git & Cloud", icon: GitBranch }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Top Header & Visual Ecosystem Grid */}
        <div className="skills-hero-grid">
          {/* Left Column: Text & CTA */}
          <div className="skills-content">
            <div className="section-eyebrow">
              <span className="eyebrow-dot"></span>
              <span className="eyebrow-text">02 // SKILLS & TECH</span>
            </div>

            <h2 className="skills-title">
              Mastery in <em>every</em> stack.
            </h2>

            <p className="skills-description">
              Frontend, Backend, UI/UX Design Systems, and Cloud Architecture. Crafting robust, scalable, and visually stunning web products using modern industry tools.
            </p>

            <div className="skills-actions">
              <a href="#projects" className="cta-dark-btn">
                <span>Explore <strong>all skills</strong></span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="https://github.com/Talha-Yaseen-Hub" 
                target="_blank" 
                rel="noreferrer" 
                className="cta-glass-btn"
              >
                <Github size={18} />
                <span>GitHub</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Floating Ecosystem Visual */}
          <div className="skills-visual-ecosystem">
            {/* Terminal Window Card (Top Left) */}
            <div className="ecosystem-card terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="terminal-title">Terminal</span>
              </div>
              <div className="terminal-body">
                <p className="command-line">&gt; npx portfolio-skills --all</p>
                <div className="status-item"><Check size={14} className="check-icon" /> Installing Core Stack</div>
                <div className="status-item"><Check size={14} className="check-icon" /> React 18 &amp; Next.js</div>
                <div className="status-item"><Check size={14} className="check-icon" /> TypeScript Architecture</div>
                <p className="terminal-footer">Ready to build production applications.</p>
              </div>
            </div>

            {/* Design System Card (Top Right) */}
            <div className="ecosystem-card design-system-card">
              <div className="ds-header">Design System</div>
              <ul className="ds-list">
                <li><span className="ds-icon">Aa</span> Typography</li>
                <li><span className="ds-icon">• •</span> Spacing &amp; Grids</li>
                <li><span className="ds-icon">◐</span> Color Palettes</li>
                <li><span className="ds-icon">◫</span> Elevation &amp; Depth</li>
                <li><span className="ds-icon">❒</span> Components</li>
              </ul>
            </div>

            {/* Code Editor Snippet Card (Bottom Right) */}
            <div className="ecosystem-card code-card">
              <div className="code-header">
                <span>Button.tsx</span>
              </div>
              <pre className="code-body">
                <code>
{`export function Button({
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className="btn-accent"
    />
  )
}`}
                </code>
              </pre>
            </div>

            {/* Center 3D Ceramic Stone Badge */}
            <div className="ecosystem-card stone-badge-card">
              <div className="stone-tile">
                <div className="stone-engraved-logo">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Info Card (Bottom Left) */}
            <div className="ecosystem-card info-card">
              <div className="info-icon-box">
                <Sparkles size={18} />
              </div>
              <div className="info-text-group">
                <span className="info-title">Full-Stack Tech</span>
                <span className="info-sub">Optimized for scale &amp; speed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tech Ribbon Grid */}
        <div className="tech-ribbon-section">
          <div className="tech-ribbon-header">
            <span>Tech Stack &amp; Frameworks</span>
          </div>

          <div className="tech-cards-grid">
            {techStack.map((tech) => {
              const IconComp = tech.icon;
              return (
                <div key={tech.id} className="tech-card">
                  <span className="tech-num">{tech.id}</span>
                  <div className="tech-icon-wrapper">
                    <IconComp size={20} />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
