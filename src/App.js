// src/App.jsx

import React, { useEffect } from 'react';
import { initScrollReveal, initParallax, initMobileNav } from './utils/scrollEffects';
import HeroSection from './components/1_HeroSection';
import ProblemSection from './components/2_ProblemSection';
import SolutionSection from './components/3_SolutionSection';
import ValueProposition from './components/4_ValueProposition';
import CompanyVision from './components/5_CompanyVision';
import FutureRoadmap from './components/6_FutureRoadmap';
import CallToAction from './components/7_CallToAction';
import Footer from './components/8_Footer';
import './App.css'; // Asegúrate de que la ruta sea correcta

function App() {
  useEffect(() => {
    // Inicializar efectos después de que el componente se monte
    initScrollReveal();
    initParallax();
    initMobileNav();
  }, []);
  return (
    <div className="App">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ValueProposition />
      <CompanyVision />
      <FutureRoadmap />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;