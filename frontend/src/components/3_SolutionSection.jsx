import React, { useEffect } from 'react';
import '../App.css';
import '../styles/SolutionSection.css';
import { initScrollReveal, initParallax } from '../utils/scrollEffects.js';

const SolutionSection = () => {
  useEffect(() => {
    initScrollReveal();
    initParallax();
  }, []);

  return (
    <section className="enhanced-solution-section" id="solucion">
      {/* Elementos de fondo decorativos con parallax */}
      <div className="solution-bg-pattern parallax-element" data-speed="0.2"></div>
      
      {/* Nuevos elementos de fondo profesionales */}
      <div className="professional-overlay"></div>
      <div className="gradient-orbs">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="solution-geometric-shapes">
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.7" data-type="connected-particles"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.5" data-type="dynamic-connectors"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.2" data-type="shattered-shapes"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.2" data-type="floating-triangles"></div>
        
        {/* Nuevas formas geométricas profesionales */}
        <div className="geometric-shape neural-network parallax-element" data-speed="0.3"></div>
        <div className="geometric-shape data-flow parallax-element" data-speed="0.6"></div>
        <div className="geometric-shape tech-grid parallax-element" data-speed="0.4"></div>
      </div>

      <div className="container">
        <div className="solution-header reveal">
          <div className="title-decoration"></div>
          <h2 className="solution-title">
            <span className="title-highlight">LAZARUS:</span> La Solución Digital que Transforma tu Práctica
          </h2>
          <p className="solution-subtitle">
            LAZARUS es una plataforma integral de gestión de salud mental y rehabilitación, 
            diseñada para simplificar y optimizar la labor de los profesionales.
          </p>
          <div className="subtitle-accent"></div>
        </div>

        <div className="features-grid grid">
          {/* Feature 1: Gestión de HCE */}
          <div className="feature-card reveal delay-1">
            <div className="card-glow"></div>
            <div className="feature-header">
              <div className="feature-icon-container">
                <div className="icon-backdrop"></div>
                <div className="feature-icon">🏥</div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Gestión de Historiales Clínicos (HCE)</h3>
                <p className="feature-description">
                  Accede, actualiza y gestiona de manera segura el historial clínico de tus pacientes 
                  desde una única ubicación centralizada.
                </p>
              </div>
            </div>
            <div className="feature-visual">
              <div className="hce-visual">
                <div className="hce-folder">
                  <div className="folder-tab"></div>
                  <div className="folder-content"></div>
                </div>
                <div className="hce-folder">
                  <div className="folder-tab"></div>
                  <div className="folder-content"></div>
                </div>
                <div className="hce-folder">
                  <div className="folder-tab"></div>
                  <div className="folder-content"></div>
                </div>
              </div>
            </div>
            <div className="feature-accent"></div>
          </div>

          {/* Feature 2: Evaluaciones Psicológicas */}
          <div className="feature-card reveal delay-2">
            <div className="card-glow"></div>
            <div className="feature-header">
              <div className="feature-icon-container">
                <div className="icon-backdrop"></div>
                <div className="feature-icon">📊</div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Evaluaciones Psicológicas Integradas</h3>
                <p className="feature-description">
                  Aplica y corrige evaluaciones de manera digital, facilitando el diagnóstico 
                  y seguimiento de los avances de cada paciente.
                </p>
              </div>
            </div>
            <div className="feature-visual">
              <div className="evaluation-visual">
                <div className="eval-chart">
                  <div className="eval-bar">
                    <div className="bar-fill"></div>
                    <div className="bar-glow"></div>
                  </div>
                  <div className="eval-bar">
                    <div className="bar-fill"></div>
                    <div className="bar-glow"></div>
                  </div>
                  <div className="eval-bar">
                    <div className="bar-fill"></div>
                    <div className="bar-glow"></div>
                  </div>
                  <div className="eval-bar">
                    <div className="bar-fill"></div>
                    <div className="bar-glow"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-accent"></div>
          </div>

          {/* Feature 3: Planificación de Tratamientos */}
          <div className="feature-card reveal delay-3">
            <div className="card-glow"></div>
            <div className="feature-header">
              <div className="feature-icon-container">
                <div className="icon-backdrop"></div>
                <div className="feature-icon">🎯</div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Planificación y Seguimiento de Tratamientos</h3>
                <p className="feature-description">
                  Crea planes de tratamiento personalizados basados en TCC y sigue el progreso 
                  del paciente con gráficos visuales simples.
                </p>
              </div>
            </div>
            <div className="feature-visual">
              <div className="treatment-visual">
                <div className="treatment-node">
                  <div className="node-core"></div>
                  <div className="node-ring"></div>
                </div>
                <div className="treatment-connector">
                  <div className="connector-line"></div>
                  <div className="connector-pulse"></div>
                </div>
                <div className="treatment-node">
                  <div className="node-core"></div>
                  <div className="node-ring"></div>
                </div>
                <div className="treatment-connector">
                  <div className="connector-line"></div>
                  <div className="connector-pulse"></div>
                </div>
                <div className="treatment-node">
                  <div className="node-core"></div>
                  <div className="node-ring"></div>
                </div>
              </div>
            </div>
            <div className="feature-accent"></div>
          </div>

          {/* Feature 4: Seguridad de Datos */}
          <div className="feature-card reveal delay-1">
            <div className="card-glow"></div>
            <div className="feature-header">
              <div className="feature-icon-container">
                <div className="icon-backdrop"></div>
                <div className="feature-icon">🛡️</div>
              </div>
              <div className="feature-content">
                <h3 className="feature-title">Seguridad y Privacidad de Datos</h3>
                <p className="feature-description">
                  Garantiza la máxima protección de la información sensible de tus pacientes 
                  con medidas de seguridad robustas y cumplimiento de HIPAA y GDPR.
                </p>
              </div>
            </div>
            <div className="feature-visual">
              <div className="security-visual">
                <div className="security-shield">
                  <div className="shield-core">🛡️</div>
                  <div className="shield-pulse"></div>
                </div>
                <div className="security-particles">
                  <div className="particle">
                    <div className="particle-trail"></div>
                  </div>
                  <div className="particle">
                    <div className="particle-trail"></div>
                  </div>
                  <div className="particle">
                    <div className="particle-trail"></div>
                  </div>
                  <div className="particle">
                    <div className="particle-trail"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-accent"></div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default SolutionSection;