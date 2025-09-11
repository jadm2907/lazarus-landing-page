import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import logo from '../assets/images/logo-img.png';
import BrainBackground from '../utils/BrainBackground';
import '../styles/HeroSection.css';
import '../styles/BrainBackground.css';
import { initScrollReveal, initParallax } from '../utils/scrollEffects';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    initScrollReveal();
    initParallax();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" onClick={() => scrollToSection('hero')} className="logo">
            <img src={logo} alt="Lazarus SGCR" className="logo-img" />
            LAZARUS
          </a>
          <button className="mobile-toggle" onClick={toggleMobileMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav>
            <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
              <li className="nav-item"><a href="#hero" onClick={() => scrollToSection('hero')} className="nav-link">Inicio</a></li>
              <li className="nav-item"><a href="#problema" onClick={() => scrollToSection('problema')} className="nav-link">El Problema</a></li>
              <li className="nav-item"><a href="#solucion" onClick={() => scrollToSection('solucion')} className="nav-link">La Solución</a></li>
              <li className="nav-item"><a href="#propuesta-de-valor" onClick={() => scrollToSection('propuesta-de-valor')} className="nav-link">Propuesta de Valor</a></li>
              <li className="nav-item"><a href="#contacto" onClick={() => scrollToSection('contacto')} className="nav-link">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero-section" ref={heroRef}>
        <div className="brain-container">
          <BrainBackground className="parallax-element" data-speed="0.3" />
          <div className="geometric-shape shape-brain parallax-element" data-speed="0.5" data-type="connected-particles"></div>
        </div>
        <div className="hero-content reveal">
          <h1 className="hero-title">La Plataforma Todo en Uno para la Gestión de la Salud Mental</h1>
          <p className="hero-subtitle">Una solución digital centralizada para optimizar la administración de pacientes, evaluaciones y tratamientos.</p>
          <div className="hero-cta">
            <button className="cta-button" onClick={toggleForm}>Descubre cómo</button>
          </div>
        </div>
      </section>
      {isFormOpen && (
        <ContactForm
          initialMessage="Estoy interesado en ser un early adopter de Lazarus"
          onClose={toggleForm}
        />
      )}
    </>
  );
};

export default HeroSection;