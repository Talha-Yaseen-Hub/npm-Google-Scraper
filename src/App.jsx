import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

export default function App() {
  return (
    <div className="portfolio-app">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
      </main>
    </div>
  );
}
