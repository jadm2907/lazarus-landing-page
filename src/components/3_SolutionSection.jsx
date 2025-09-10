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
      
      <div className="solution-geometric-shapes">
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.7" data-type="connected-particles"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.5" data-type="dynamic-connectors"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.2" data-type="shattered-shapes"></div>
      </div>

      <div className="container">
        <div className="solution-header reveal">
          <h2 className="solution-title">LAZARUS: La Solución Digital que Transforma tu Práctica</h2>
          <p className="solution-subtitle">
            LAZARUS es una plataforma integral de gestión de salud mental y rehabilitación, 
            diseñada para simplificar y optimizar la labor de los profesionales.
          </p>
        </div>

        <div className="features-grid grid">
          {/* Feature 1: Gestión de HCE */}
          <div className="feature-card reveal delay-1">
            <div className="feature-header">
              <div className="feature-icon-container">
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
                <div className="hce-folder"></div>
                <div className="hce-folder"></div>
                <div className="hce-folder"></div>
              </div>
            </div>
          </div>

          {/* Feature 2: Evaluaciones Psicológicas */}
          <div className="feature-card reveal delay-2">
            <div className="feature-header">
              <div className="feature-icon-container">
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
                  <div className="eval-bar"></div>
                  <div className="eval-bar"></div>
                  <div className="eval-bar"></div>
                  <div className="eval-bar"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Planificación de Tratamientos */}
          <div className="feature-card reveal delay-3">
            <div className="feature-header">
              <div className="feature-icon-container">
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
                <div className="treatment-node"></div>
                <div className="treatment-connector"></div>
                <div className="treatment-node"></div>
                <div className="treatment-connector"></div>
                <div className="treatment-node"></div>
              </div>
            </div>
          </div>

          {/* Feature 4: Seguridad de Datos */}
          <div className="feature-card reveal delay-1">
            <div className="feature-header">
              <div className="feature-icon-container">
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
                <div className="security-shield">🛡️</div>
                <div className="security-particles">
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                  <div className="particle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;