import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const fanDeckRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      fanDeckRef.current.forEach((card, i) => {
        if (!card) return;
        const depth = 0.5 + (i * 0.2);
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

  const projects = [
    {
      id: '01',
      title: 'nexus-saas',
      tag: 'FULL STACK',
      desc: 'Enterprise SaaS analytics platform built with React 19, Next.js App Router, Tailwind, Node.js microservices, and PostgreSQL.',
      image: '/proj_thumb_nexus.jpg',
      link: '#'
    },
    {
      id: '02',
      title: 'taste-skill-ui',
      tag: 'DESIGN SYSTEM',
      desc: 'Modular design system & component library engineered for modern web apps with glassmorphism, fluid typography, and dark mode tokens.',
      image: '/proj_thumb_tasteskill.jpg',
      link: '#'
    },
    {
      id: '03',
      title: 'ai-code-assistant',
      tag: 'AI ENGINE',
      desc: 'LLM-powered developer tool providing real-time code generation, refactoring suggestions, and automated TypeScript type inference.',
      image: '/proj_thumb_aicode.jpg',
      link: '#'
    },
    {
      id: '04',
      title: 'realtime-chat-engine',
      tag: 'WEBSOCKETS',
      desc: 'High-concurrency chat and collaboration backend built with Node.js, Socket.io, Redis Pub/Sub, and JWT token authentication.',
      image: '/project_preview_1.jpg',
      link: '#'
    },
    {
      id: '05',
      title: 'ecommerce-storefront',
      tag: 'E-COMMERCE',
      desc: 'Headless e-commerce web application featuring server-rendered product pages, Stripe checkout integration, and sub-second page loads.',
      image: '/project_preview_2.jpg',
      link: '#'
    },
    {
      id: '06',
      title: 'devops-dashboard',
      tag: 'INFRASTRUCTURE',
      desc: 'Cloud infrastructure monitoring dashboard displaying real-time CI/CD pipeline builds, Docker container health, and server uptime.',
      image: '/hero_sculpture.jpg',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section-v2" ref={sectionRef}>
      {/* Section Header Eyebrow */}
      <div className="projects-eyebrow-wrapper">
        <div className="section-eyebrow">
          <span className="eyebrow-dot"></span>
          <span className="eyebrow-text">03 // FEATURED PROJECTS</span>
        </div>
      </div>

      <div className="projects-v2-container">
        {/* Left Column: Title & 3-Column Project Grid */}
        <div className="projects-v2-left">
          <div className="projects-header-block">
            <h2 className="projects-v2-title">
              Featured<br />
              <em>projects</em>.
            </h2>
            <p className="projects-v2-subtitle">
              Pick a project to explore architecture, code quality, and live interactive demos.
            </p>
          </div>

          {/* Project Cards Grid */}
          <div className="projects-cards-grid">
            {projects.map((proj) => (
              <a 
                key={proj.id} 
                href={proj.link} 
                className="project-grid-card"
                target="_blank"
                rel="noreferrer"
              >
                <div className="proj-top-bar">
                  <div className="proj-thumb-box">
                    <img src={proj.image} alt={proj.title} className="proj-thumb-img" />
                  </div>
                  <span className="proj-arrow">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <div className="proj-content-box">
                  <span className="proj-tag">{proj.tag}</span>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Spaced Fan Deck Showcase */}
        <div className="projects-v2-right">
          <div className="fan-deck-area">
            {/* 1. Top Poster Card */}
            <div 
              className="fan-card fan-card-poster"
              ref={(el) => (fanDeckRef.current[0] = el)}
              data-base-transform="rotate(0deg)"
            >
              <div className="card-wire"></div>
              <div className="fan-poster-header">
                <span className="fan-poster-brand">Talha Yaseen</span>
                <span className="fan-poster-ver">Visual System v2.0</span>
              </div>
              
              <div className="fan-poster-body">
                <div className="fan-poster-left">
                  <h4 className="fan-poster-title">
                    Design<br />
                    that feels<br />
                    <em>considered.</em>
                  </h4>
                  <p className="fan-poster-sub">
                    Crafting premium digital experiences with attention to detail and a focus on clarity.
                  </p>
                  <div className="fan-poster-link">
                    <span>View work</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
                <div className="fan-poster-right">
                  <img 
                    src="/project_preview_2.jpg" 
                    alt="Architectural Render" 
                    className="fan-poster-side-img"
                  />
                </div>
              </div>
            </div>

            {/* 2. Middle Dark Card */}
            <div 
              className="fan-card fan-card-dark"
              ref={(el) => (fanDeckRef.current[1] = el)}
              data-base-transform="rotate(0deg)"
            >
              <div className="card-wire"></div>
              <div className="fan-dark-badge">
                <Sparkles size={18} />
              </div>
              <h4 className="fan-dark-title">
                One stack.<br />
                Full control.<br />
                All built to ship<br />
                <em>better UI</em>.
              </h4>
              <span className="fan-dark-author">— Talha Yaseen</span>
            </div>

            {/* 3. Bottom Polaroid Snapshot Card */}
            <div 
              className="fan-card fan-card-snapshot"
              ref={(el) => (fanDeckRef.current[2] = el)}
              data-base-transform="rotate(0deg)"
            >
              <div className="card-wire"></div>
              <div className="fan-snapshot-img-box">
                <img 
                  src="/project_preview_1.jpg" 
                  alt="Dashboard Preview" 
                  className="fan-snapshot-img"
                />
              </div>
              <span className="fan-snapshot-label">Stratos SaaS Dashboard v2.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
