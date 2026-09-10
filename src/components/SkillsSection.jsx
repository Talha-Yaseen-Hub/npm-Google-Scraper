import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Github, Code2, Layout, Palette, Terminal, Database, Globe } from 'lucide-react';

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeTab, setActiveTab] = useState('frontend');
  const [isAnimating, setIsAnimating] = useState(false);

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

  const handleTabChange = (tabId) => {
    if (tabId === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setIsAnimating(false);
    }, 150);
  };

  const navTabs = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'devops', label: 'DevOps' },
  ];

  // Dynamic content dictionary for Full Stack Software Engineer categories
  const tabContents = {
    frontend: {
      title: (
        <>
          Modern UI &amp;<br />
          <em>Frontend</em> engineering.
        </>
      ),
      subtitle:
        'Architecting high-performance web interfaces with React 19, Next.js App Router, TypeScript, and TailwindCSS. Focused on responsive layouts, web accessibility (a11y), and sub-second rendering speeds.',
      btnText: 'Explore Frontend Stack',
      cards: [
        {
          id: 'card-1',
          type: 'code',
          rotation: '-4deg',
          top: '2%',
          right: '2%',
          width: '220px',
          zIndex: 5,
          content: (
            <>
              <div className="fc-header">
                <div className="fc-dots">
                  <span className="dot-r"></span>
                  <span className="dot-y"></span>
                  <span className="dot-g"></span>
                </div>
                <span className="fc-title">UserDashboard.tsx</span>
              </div>
              <div className="fc-code-body">
                <code><span className="ck">export const</span> <span className="cf">Dashboard</span> = () =&gt; {'{'}</code>
                <code>  <span className="ck">const</span> {'{'} data, loading {'}'} = useUser()</code>
                <code>  <span className="ck">return</span> loading ? &lt;<span className="ct">Spin</span> /&gt; : (</code>
                <code>    &lt;<span className="ct">AnalyticsGrid</span> data={'{'}data{'}'} /&gt;</code>
                <code>  )</code>
                <code>{'}'}</code>
              </div>
            </>
          ),
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
                <span>Frontend Stack</span>
              </div>
              <div className="fc-ui-list">
                <div className="fc-ui-item active">
                  <Code2 size={14} />
                  <span>React 19 &amp; Next.js</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Layout size={14} />
                  <span>TypeScript Safety</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Palette size={14} />
                  <span>Tailwind &amp; Motion</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Globe size={14} />
                  <span>State (Zustand/Redux)</span>
                  <span className="fc-check">✓</span>
                </div>
              </div>
            </>
          ),
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
                <code><span className="tp">$</span> pnpm build --filter web</code>
                <code className="ts">✓ 42 modules optimized</code>
                <code><span className="tp">$</span> pnpm preview</code>
                <code className="ts">✓ Bundle size: 34.2 KB</code>
                <code className="tc">⚡ Core Web Vitals 100/100</code>
              </div>
            </>
          ),
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
                <span>Frontend Vitals</span>
              </div>
              <div className="fc-metric-body">
                <div className="fc-metric-row">
                  <span className="metric-label">Lighthouse</span>
                  <span className="metric-value green">99 / 100</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">First Contentful</span>
                  <span className="metric-value green">0.4 sec</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">Layout Shift</span>
                  <span className="metric-value green">0.00 CLS</span>
                </div>
                <div className="fc-metric-bar">
                  <div className="metric-fill" style={{ width: '99%' }}></div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },

    backend: {
      title: (
        <>
          Scalable APIs &amp;<br />
          <em>Backend</em> systems.
        </>
      ),
      subtitle:
        'Engineering production-ready Node.js RESTful & GraphQL APIs, PostgreSQL relational schemas, Prisma ORM queries, Redis caching, and robust OAuth2 / JWT authentication security.',
      btnText: 'Explore Backend Architecture',
      cards: [
        {
          id: 'card-1',
          type: 'code',
          rotation: '-4deg',
          top: '2%',
          right: '2%',
          width: '220px',
          zIndex: 5,
          content: (
            <>
              <div className="fc-header">
                <div className="fc-dots">
                  <span className="dot-r"></span>
                  <span className="dot-y"></span>
                  <span className="dot-g"></span>
                </div>
                <span className="fc-title">order.controller.ts</span>
              </div>
              <div className="fc-code-body">
                <code><span className="ck">export async</span> <span className="cf">createOrder</span>(req, res) {'{'}</code>
                <code>  <span className="ck">const</span> user = <span className="ck">await</span> prisma.user.find()</code>
                <code>  <span className="ck">const</span> order = <span className="ck">await</span> tx.create(data)</code>
                <code>  res.status(201).json(order)</code>
                <code>{'}'}</code>
              </div>
            </>
          ),
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
                <Database size={16} />
                <span>Backend Stack</span>
              </div>
              <div className="fc-ui-list">
                <div className="fc-ui-item active">
                  <Terminal size={14} />
                  <span>Node.js / Express</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Database size={14} />
                  <span>PostgreSQL &amp; Prisma</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Code2 size={14} />
                  <span>REST &amp; GraphQL APIs</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Globe size={14} />
                  <span>Redis &amp; JWT Security</span>
                  <span className="fc-check">✓</span>
                </div>
              </div>
            </>
          ),
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
                <span>server.log</span>
              </div>
              <div className="fc-terminal-body">
                <code><span className="tp">$</span> pnpm start:prod</code>
                <code className="ts">✓ Postgres Cluster Connected</code>
                <code><span className="tp">$</span> Redis Session Cache</code>
                <code className="ts">✓ Query latency: 4ms</code>
                <code className="tc">🔒 OAuth2 &amp; Rate Limit Active</code>
              </div>
            </>
          ),
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
                <span>API Performance</span>
              </div>
              <div className="fc-metric-body">
                <div className="fc-metric-row">
                  <span className="metric-label">Avg Latency</span>
                  <span className="metric-value green">&lt; 18ms</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">API Uptime</span>
                  <span className="metric-value green">99.99%</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">Throughput</span>
                  <span className="metric-value green">5,200 req/s</span>
                </div>
                <div className="fc-metric-bar">
                  <div className="metric-fill" style={{ width: '99%' }}></div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },

    design: {
      title: (
        <>
          Systematic UI/UX &amp;<br />
          <em>Product</em> design.
        </>
      ),
      subtitle:
        'Transforming product requirements into clear visual wireframes, interactive Figma prototypes, design tokens, responsive typography scales, and modular design system libraries.',
      btnText: 'Explore Design Systems',
      cards: [
        {
          id: 'card-1',
          type: 'code',
          rotation: '-4deg',
          top: '2%',
          right: '2%',
          width: '220px',
          zIndex: 5,
          content: (
            <>
              <div className="fc-header">
                <div className="fc-dots">
                  <span className="dot-r"></span>
                  <span className="dot-y"></span>
                  <span className="dot-g"></span>
                </div>
                <span className="fc-title">tokens.config.json</span>
              </div>
              <div className="fc-code-body">
                <code>{'{'}</code>
                <code>  <span className="ck">"color"</span>: {'{'} <span className="ck">"primary"</span>: <span className="cs">"#161616"</span> {'}'},</code>
                <code>  <span className="ck">"font"</span>: {'{'} <span className="ck">"sans"</span>: <span className="cs">"Jakarta"</span> {'}'},</code>
                <code>  <span className="ck">"radius"</span>: <span className="cs">"14px"</span></code>
                <code>{'}'}</code>
              </div>
            </>
          ),
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
                <Palette size={16} />
                <span>Design Toolkit</span>
              </div>
              <div className="fc-ui-list">
                <div className="fc-ui-item active">
                  <Palette size={14} />
                  <span>Figma Systems</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Layout size={14} />
                  <span>UX &amp; Wireframing</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Code2 size={14} />
                  <span>Design Tokens</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Globe size={14} />
                  <span>Interactive Prototypes</span>
                  <span className="fc-check">✓</span>
                </div>
              </div>
            </>
          ),
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
                <span>figma-cli</span>
              </div>
              <div className="fc-terminal-body">
                <code><span className="tp">$</span> figma sync --tokens</code>
                <code className="ts">✓ Extracted 48 Variables</code>
                <code><span className="tp">$</span> export-icon-sprite</code>
                <code className="ts">✓ SVG Icons Packaged</code>
                <code className="tc">🎨 Design Tokens Up to Date</code>
              </div>
            </>
          ),
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
                <span>UX Standards</span>
              </div>
              <div className="fc-metric-body">
                <div className="fc-metric-row">
                  <span className="metric-label">Usability Rating</span>
                  <span className="metric-value green">98%</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">WCAG Contrast</span>
                  <span className="metric-value green">AAA Rated</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">Figma Tokens</span>
                  <span className="metric-value green">85+ Tokens</span>
                </div>
                <div className="fc-metric-bar">
                  <div className="metric-fill" style={{ width: '98%' }}></div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },

    devops: {
      title: (
        <>
          Automated Cloud &amp;<br />
          <em>DevOps</em> pipelines.
        </>
      ),
      subtitle:
        'Managing full application lifecycles with Docker containerization, GitHub Actions CI/CD workflows, Vercel/AWS cloud hosting, NGINX reverse proxies, and automated zero-downtime deployments.',
      btnText: 'Explore DevOps Infrastructure',
      cards: [
        {
          id: 'card-1',
          type: 'code',
          rotation: '-4deg',
          top: '2%',
          right: '2%',
          width: '220px',
          zIndex: 5,
          content: (
            <>
              <div className="fc-header">
                <div className="fc-dots">
                  <span className="dot-r"></span>
                  <span className="dot-y"></span>
                  <span className="dot-g"></span>
                </div>
                <span className="fc-title">deploy.workflow.yml</span>
              </div>
              <div className="fc-code-body">
                <code><span className="ck">name</span>: CI/CD Pipeline</code>
                <code><span className="ck">on</span>: [push to main]</code>
                <code><span className="ck">steps</span>:</code>
                <code>  - <span className="ck">uses</span>: actions/checkout@v4</code>
                <code>  - <span className="ck">run</span>: pnpm build &amp;&amp; test</code>
              </div>
            </>
          ),
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
                <Terminal size={16} />
                <span>DevOps Stack</span>
              </div>
              <div className="fc-ui-list">
                <div className="fc-ui-item active">
                  <Terminal size={14} />
                  <span>Docker Containers</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Code2 size={14} />
                  <span>GitHub Actions CI/CD</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Globe size={14} />
                  <span>Vercel / AWS Hosting</span>
                  <span className="fc-check">✓</span>
                </div>
                <div className="fc-ui-item active">
                  <Database size={14} />
                  <span>SSL &amp; NGINX Proxies</span>
                  <span className="fc-check">✓</span>
                </div>
              </div>
            </>
          ),
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
                <span>deployment.log</span>
              </div>
              <div className="fc-terminal-body">
                <code><span className="tp">$</span> git push origin main</code>
                <code className="ts">✓ CI Tests &amp; Build Passed</code>
                <code><span className="tp">$</span> docker push registry</code>
                <code className="ts">✓ Container Image Ready</code>
                <code className="tc">⚡ Zero Downtime Deploy</code>
              </div>
            </>
          ),
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
                <span>Pipeline Health</span>
              </div>
              <div className="fc-metric-body">
                <div className="fc-metric-row">
                  <span className="metric-label">Build Success</span>
                  <span className="metric-value green">100%</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">Deploy Speed</span>
                  <span className="metric-value green">35 sec</span>
                </div>
                <div className="fc-metric-row">
                  <span className="metric-label">Uptime</span>
                  <span className="metric-value green">99.9%</span>
                </div>
                <div className="fc-metric-bar">
                  <div className="metric-fill" style={{ width: '100%' }}></div>
                </div>
              </div>
            </>
          ),
        },
      ],
    },
  };

  const currentTab = tabContents[activeTab] || tabContents.frontend;

  return (
    <section id="skills" className="skills-section-v2" ref={sectionRef}>
      {/* Hanging Navigation Tabs */}
      <div className="hanging-tabs-bar">
        {navTabs.map((tab) => (
          <div
            key={tab.id}
            className={`hanging-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
            role="button"
            tabIndex={0}
          >
            <span>{tab.label}</span>
          </div>
        ))}
      </div>

      <div className={`skills-v2-container ${isAnimating ? 'tab-transitioning' : ''}`}>
        {/* Left Column - Text Content */}
        <div className="skills-v2-content">
          <h2 className="skills-v2-title">
            {currentTab.title}
          </h2>

          <p className="skills-v2-subtitle">
            {currentTab.subtitle}
          </p>

          <div className="skills-v2-cta-group">
            <a href="#work" className="skills-v2-btn-primary">
              <span>{currentTab.btnText}</span>
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
          {currentTab.cards.map((card, i) => (
            <div
              key={`${activeTab}-${card.id}`}
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
        <p className="skills-v2-ribbon-label">Core Tech Stack &amp; Frameworks</p>
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
