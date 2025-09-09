import React, { useState, useEffect } from 'react';
import '../App.css';
import logo from '../assets/images/logo-img.png';
import BrainBackground from '../utils/BrainBackground';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="logo">
            <img src={logo} alt="Lazarus SGCR" className="logo-img" />
            LAZARUS
          </a>
          <button className="mobile-toggle">☰</button>
          <nav>
            <ul className="nav-menu">
              <li className="nav-item"><a href="#hero" className="nav-link">Inicio</a></li>
              <li className="nav-item"><a href="#problema" className="nav-link">El Problema</a></li>
              <li className="nav-item"><a href="#solucion" className="nav-link">La Solución</a></li>
              <li className="nav-item"><a href="#propuesta-de-valor" className="nav-link">Propuesta de Valor</a></li>
              <li className="nav-item"><a href="#contacto" className="nav-link">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="hero" className="hero-section">
        <BrainBackground />
        <div className="hero-content">
          <h1 className="hero-title">La Plataforma Todo en Uno para la Gestión de la Salud Mental</h1>
          <p className="hero-subtitle">Una solución digital centralizada para optimizar la administración de pacientes, evaluaciones y tratamientos.</p>
          <div className="hero-cta">
            <button className="cta-button">Descubre cómo</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;