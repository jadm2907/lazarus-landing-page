import React from 'react';
import '../App.css';


const SolutionSection = () => {
  return (
    <section className="enhanced-solution-section" id="solucion">
        {/* Elementos de fondo decorativos */}
        <div className="solution-bg-pattern"></div>
        
        <div className="solution-geometric-shapes">
          <div className="geometric-shape shape-brain"></div>
          <div className="geometric-shape shape-dna"></div>
          <div className="geometric-shape shape-network">
            <div className="network-node node-1"></div>
            <div className="network-node node-2"></div>
            <div className="network-node node-3"></div>
            <div className="network-node node-4"></div>
            <div className="network-node node-center"></div>
          </div>
        </div>

        <div className="container">
          <div className="solution-header">
            
            <h2 className="solution-title">
              LAZARUS : La Solución Digital que Transforma tu Práctica
            </h2>
            <p className="solution-subtitle">
              LAZARUS es una plataforma integral de gestión de salud mental y rehabilitación, 
              diseñada para simplificar y optimizar la labor de los profesionales.
            </p>
          </div>

          <div className="features-grid">
            {/* Feature 1: Gestión de HCE */}
            <div className="feature-card">
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
            <div className="feature-card">
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
            <div className="feature-card">
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
            <div className="feature-card">
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