import React, { useEffect } from 'react';
import '../App.css';
import '../styles/ProblemSection.css';
import { initScrollReveal } from '../utils/scrollEffects';

const ProblemSection = () => {
  useEffect(() => {
    // Inicializar efectos de scroll
    initScrollReveal();
  }, []);

  return (
    <section className="enhanced-problem-section reveal" id="problema">
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>

        <div className="container">
          <div className="section-header reveal delay-1">
            <h2 className="section-title">Los desafíos de la gestión clínica</h2>
            <p className="intro-text">
              Entendemos los obstáculos a los que se enfrentan los profesionales de la salud mental y las instituciones.
            </p>
          </div>

          <div className="problems-container">
            <div className="problem-card reveal delay-1">
              <div className="problem-icon-container">
                <i className="problem-icon">📋</i>
              </div>
              <h3 className="problem-title">Procesos manuales y fragmentados</h3>
              <p className="problem-description">
                Consumen tiempo valioso que podría dedicarse a la atención al paciente.
              </p>
              <div className="problem-visual">
                <div className="fragmented-process">
                  <i>📄</i>
                  <i>→</i>
                  <i>🏥</i>
                  <i>→</i>
                  <i>📊</i>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-2">
              <div className="problem-icon-container">
                <i className="problem-icon">📈</i>
              </div>
              <h3 className="problem-title">Dificultades en la trazabilidad</h3>
              <p className="problem-description">
                Del progreso del paciente a lo largo del tiempo.
              </p>
              <div className="problem-visual">
                <div className="progress-chart">
                  <div className="chart-bar" style={{height: '30%'}}></div>
                  <div className="chart-bar" style={{height: '60%'}}></div>
                  <div className="chart-bar" style={{height: '40%'}}></div>
                  <div className="chart-bar" style={{height: '80%'}}></div>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-3">
              <div className="problem-icon-container">
                <i className="problem-icon">🛡️</i>
              </div>
              <h3 className="problem-title">Preocupaciones sobre seguridad</h3>
              <p className="problem-description">
                De los datos sensibles y el historial clínico electrónico (HCE).
              </p>
              <div className="problem-visual">
                <div className="security-shield">
                  <i>⚠️</i>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-1">
              <div className="problem-icon-container">
                <i className="problem-icon">🔧</i>
              </div>
              <h3 className="problem-title">Falta de herramientas centralizadas</h3>
              <p className="problem-description">
                Que integren las necesidades específicas de rehabilitación cognitiva y TCC.
              </p>
              <div className="problem-visual">
                <div className="tools-set">
                  <i>🛠️</i>
                  <i>🔧</i>
                  <i>⚙️</i>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container reveal delay-2">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">72%</div>
                <div className="stat-label">de profesionales reportan ineficiencias</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">15h</div>
                <div className="stat-label">promedio en tareas administrativas semanales</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">43%</div>
                <div className="stat-label">de tiempo clínico dedicado a documentación</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProblemSection;