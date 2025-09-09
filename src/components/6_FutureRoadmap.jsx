import React from 'react';
import '../App.css';

const FutureRoadmap = () => {
  return (
    <section id="roadmap" className="reveal">
      <div className="container">
        <h2>Nuestro Compromiso con la Evolución</h2>
        <p>
          El MVP de Lazarus SGCR es solo el inicio. Planeamos el crecimiento continuo de la plataforma con funcionalidades que están fuera del alcance de esta fase inicial.
        </p>
        
        <div className="grid">
          {/* Columna 1 */}
          <div>
            <ul>
              <li className="feature-card delay-1">
                <span></span>
                <span>Generación de informes avanzados y personalizables, con opciones de exportación de datos.</span>
              </li>
              <li className="feature-card delay-2">
                <span></span>
                <span>Funcionalidades de comunicación interna, como mensajería segura entre profesional y paciente.</span>
              </li>
              <li className="feature-card delay-3">
                <span></span>
                <span>Integración con otros sistemas externos (EHR/EMR, sistemas de facturación).</span>
              </li>
              <li className="feature-card">
                <span></span>
                <span>Personalización avanzada de evaluaciones o creación de nuevas por parte de los profesionales.</span>
              </li>
            </ul>
          </div>
          
          {/* Columna 2 */}
          <div>
            <ul>
              <li className="feature-card delay-1">
                <span></span>
                <span>Aplicaciones móviles nativas.</span>
              </li>
              <li className="feature-card delay-2">
                <span></span>
                <span>Gestión avanzada de múltiples centros y sus configuraciones específicas.</span>
              </li>
              <li className="feature-card delay-3">
                <span></span>
                <span>Agenda de tareas diarias detallada por profesional.</span>
              </li>
              <li className="feature-card">
                <span></span>
                <span>Autenticación de dos factores (2FA).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureRoadmap;