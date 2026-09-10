import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Code2, Layout, Palette, Terminal, Database, Globe } from 'lucide-react';

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const depth = 0.5 + (i * 0.15);
        const moveX = x * 18 * depth;
        const moveY = y * 12 * depth;
        card.style.transform = `${card.dataset.baseTransform} translate(${moveX}px, ${moveY}px)`;
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (section) section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // The floating hanging cards data - mimicking the screenshot cards
  const floatingCards = [
    {
      id: 'card-1',
      type: 'code',
      rotation: '-4deg',
      top: '2%',
      right: '2%',
      width: '210px',
      zIndex: 5,
      content: (
        <>
          <div className="fc-header">
            <div className="fc-dots">
              <span className="dot-r"></span>
              <span className="dot-y"></span>
              <span className="dot-g"></span>
            </div>
            <span className="fc-title">App.tsx</span>
          </div>
          <div className="fc-code-body">
            <code><span className="ck">const</span> <span className="cf">Portfolio</span> = () =&gt; {'{'}</code>
            <code>  <span className="ck">return</span> (</code>
            <code>    &lt;<span className="ct">Layout</span>&gt;</code>
            <code>      &lt;<span className="ct">Hero</span> /&gt;</code>
            <code>      &lt;<span className="ct">Skills</span> /&gt;</code>
            <code>    &lt;/<span className="ct">Layout</span>&gt;</code>
            <code>  )</code>
            <code>{'}'}</code>
          </div>
        </>
      )
    },
    {
      id: 'card-2',
      type: 'ui',
      rotation: '3deg',
      top: '0%',
      right: '48%',
      width: '185px',
      zIndex: 4,
      content: (
        <>
          <div className="fc-ui-header">
            <Layout size={16} />
            <span>Components</span>
          </div>
          <div className="fc-ui-list">
            <div className="fc-ui-item active">
              <Code2 size={14} />
              <span>Header</span>
              <span className="fc-check">✓</span>
            </div>
            <div className="fc-ui-item active">
              <Palette size={14} />
              <span>Hero Section</span>
              <span className="fc-check">✓</span>
            </div>
            <div className="fc-ui-item active">
              <Terminal size={14} />
              <span>Skills Grid</span>
              <span className="fc-check">✓</span>
            </div>
            <div className="fc-ui-item">
              <Database size={14} />
              <span>Projects</span>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'card-3',
      type: 'dark',
      rotation: '5deg',
      top: '42%',
      right: '0%',
      width: '220px',
      zIndex: 6,
      content: (
        <>
          <div className="fc-dark-header">
            <Terminal size={14} />
            <span>terminal</span>
          </div>
          <div className="fc-terminal-body">
            <code><span className="tp">$</span> npm run build</code>
            <code className="ts">✓ Built in 1.2s</code>
            <code><span className="tp">$</span> npm run deploy</code>
            <code className="ts">✓ Deployed to vercel</code>
            <code className="tc">🚀 Live at portfolio.dev</code>
          </div>
        </>
      )
    },
    {
      id: 'card-4',
      type: 'metric',
      rotation: '-3deg',
      top: '44%',
      right: '46%',
      width: '185px',
      zIndex: 3,
      content: (
        <>
          <div className="fc-metric-header">
            <Globe size={14} />
            <span>Performance</span>
          </div>
          <div className="fc-metric-body">
            <div className="fc-metric-row">
              <span className="metric-label">Lighthouse</span>
              <span className="metric-value green">98</span>
            </div>
            <div className="fc-metric-row">
              <span className="metric-label">SEO Score</span>
              <span className="metric-value green">100</span>
            </div>
            <div className="fc-metric-row">
              <span className="metric-label">Best Practices</span>
              <span className="metric-value green">95</span>
            </div>
            <div className="fc-metric-bar">
              <div className="metric-fill" style={{ width: '97%' }}></div>
            </div>
          </div>
        </>
      )
    }
  ];

  // Top navigation hanging tabs
  const navTabs = [
    { label: 'React', active: false },
    { label: 'Frontend', active: true },
    { label: 'Backend', active: false },
    { label: 'Design', active: false },
    { label: 'DevOps', active: false },
  ];

  return (
    <section id="skills" className="skills-section-v2" ref={sectionRef}>
      {/* Hanging Navigation Tabs */}
      <div className="hanging-tabs-bar">
        {navTabs.map((tab, i) => (
          <div key={i} className={`hanging-tab ${tab.active ? 'active' : ''}`}>
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      <div className="skills-v2-container">
        {/* Left Column - Text Content */}
        <div className="skills-v2-content">
          <h2 className="skills-v2-title">
            Works with<br />
            <em>every</em> stack.
          </h2>

          <p className="skills-v2-subtitle">
            From React and Next.js to Node.js and PostgreSQL — crafting responsive interfaces, robust backends, and scalable architectures with modern tooling.
          </p>

          <div className="skills-v2-cta-group">
            <a href="#work" className="skills-v2-btn-primary">
              <span>Explore all skills</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="https://github.com/Talha-Yaseen-Hub"
              target="_blank"
              rel="noreferrer"
              className="skills-v2-btn-secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Right Column - Floating Hanging Cards */}
        <div className="skills-v2-cards-area">
          {floatingCards.map((card, i) => (
            <div
              key={card.id}
              className={`floating-card fc-${card.type}`}
              ref={(el) => (cardsRef.current[i] = el)}
              data-base-transform={`rotate(${card.rotation})`}
              style={{
                '--rotation': card.rotation,
                top: card.top,
                right: card.right,
                width: card.width,
                zIndex: card.zIndex,
              }}
            >
              {/* Hanging wire/string from top */}
              <div className="card-wire"></div>
              {card.content}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tech Ribbon */}
      <div className="skills-v2-ribbon">
        <p className="skills-v2-ribbon-label">Core Tech Stack & Frameworks</p>
        <div className="skills-v2-ribbon-grid">
          {[
            { id: '01', name: 'React' },
            { id: '02', name: 'Next.js' },
            { id: '03', name: 'TypeScript' },
            { id: '04', name: 'Node.js' },
            { id: '05', name: 'Tailwind' },
            { id: '06', name: 'PostgreSQL' },
            { id: '07', name: 'Figma' },
            { id: '08', name: 'Git & CI/CD' },
          ].map((item) => (
            <div key={item.id} className="skills-v2-ribbon-card">
              <span className="src-index">{item.id}</span>
              <span className="src-title">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
