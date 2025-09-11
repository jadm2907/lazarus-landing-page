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
            <h2 className="section-title">Desafíos en la Gestión Clínica Actual</h2>
            <p className="intro-text">
              Identificamos las principales barreras operativas que enfrentan los profesionales 
              de la salud mental y las instituciones especializadas en rehabilitación cognitiva.
            </p>
          </div>

          <div className="problems-container">
            <div className="problem-card reveal delay-1">
              <div className="problem-icon-container">
                <svg className="problem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="problem-title">Procesos Administrativos Fragmentados</h3>
              <p className="problem-description">
                Los flujos de trabajo desintegrados generan ineficiencias operativas, 
                reduciendo el tiempo disponible para la atención directa al paciente.
              </p>
              <div className="problem-visual">
                <div className="workflow-diagram">
                  <div className="workflow-step active">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14,2 14,8 20,8"/>
                    </svg>
                  </div>
                  <div className="workflow-arrow">→</div>
                  <div className="workflow-step">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div className="workflow-arrow">→</div>
                  <div className="workflow-step">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-2">
              <div className="problem-icon-container">
                <svg className="problem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 0-8-3-8-6 0-3.5 3-7 8-7s8 3.5 8 7"/>
                  <path d="M13 11l3 3 7-7"/>
                </svg>
              </div>
              <h3 className="problem-title">Limitaciones en Seguimiento Longitudinal</h3>
              <p className="problem-description">
                Dificultades para mantener una trazabilidad completa del progreso terapéutico 
                y los resultados de intervención a lo largo del tiempo.
              </p>
              <div className="problem-visual">
                <div className="progress-timeline">
                  <div className="timeline-point completed"></div>
                  <div className="timeline-line"></div>
                  <div className="timeline-point current"></div>
                  <div className="timeline-line incomplete"></div>
                  <div className="timeline-point pending"></div>
                  <div className="timeline-line incomplete"></div>
                  <div className="timeline-point pending"></div>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-3">
              <div className="problem-icon-container">
                <svg className="problem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3 className="problem-title">Gestión de Datos Sensibles</h3>
              <p className="problem-description">
                Necesidad de garantizar la confidencialidad y seguridad de la información 
                clínica mientras se mantiene la accesibilidad para el equipo terapéutico.
              </p>
              <div className="problem-visual">
                <div className="security-indicator">
                  <div className="security-ring">
                    <div className="security-core">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM18 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="problem-card reveal delay-4">
              <div className="problem-icon-container">
                <svg className="problem-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h3 className="problem-title">Ausencia de Integración Sistémica</h3>
              <p className="problem-description">
                Falta de plataformas especializadas que unifiquen la evaluación neuropsicológica, 
                rehabilitación cognitiva y terapia cognitivo-conductual.
              </p>
              <div className="problem-visual">
                <div className="integration-puzzle">
                  <div className="puzzle-piece piece-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="puzzle-piece piece-2">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  <div className="puzzle-piece piece-3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-container reveal delay-2">
            <div className="stats-header">
              <h3>Impacto Operativo Actual</h3>
              <p>Datos de eficiencia en la práctica clínica especializada</p>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <div className="stat-number">68%</div>
                <div className="stat-label">de profesionales reportan ineficiencias en flujos administrativos</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className="stat-number">12h</div>
                <div className="stat-label">promedio semanal en documentación y tareas administrativas</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                </div>
                <div className="stat-number">35%</div>
                <div className="stat-label">del tiempo clínico dedicado a documentación no terapéutica</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ProblemSection;