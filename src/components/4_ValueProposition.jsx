import React, { useEffect } from 'react';
import '../App.css';
import '../styles/ValueProposition.css';
import { initScrollReveal, initParallax } from '../utils/scrollEffects.js';

const ValueProposition = () => {
  useEffect(() => {
    initScrollReveal();
    initParallax();
  }, []);

  return (
    <section id="propuesta-de-valor" className="value-section reveal">
      <div className="container">
        <div className="value-header reveal">
          <h2 className="value-title">El Valor de LAZARUS para Cada Usuario</h2>
          <p className="value-subtitle">
            LAZARUS está diseñado para mejorar la productividad y la calidad de vida de todos los involucrados en el proceso de rehabilitación.
          </p>
        </div>

        {/* Diagrama Circular Central */}
        <div className="value-diagram parallax-element" data-speed="0.2">
          <div className="diagram-container">
            <div className="central-circle reveal">
              <div className="lazarus-logo">
                <span className="logo-text">LAZARUS</span>
              </div>
            </div>
            
            {/* Beneficios alrededor del círculo */}
            <div className="benefit-node node-1 reveal delay-1">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
              </div>
              <div className="node-title">Sin Riesgos</div>
              <div className="node-content">Prueba gratuita de 14 días para explorar todas las funcionalidades</div>
            </div>
            
            <div className="benefit-node node-2 reveal delay-2">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div className="node-title">Ahorro de Tiempo</div>
              <div className="node-content">Reduce 40% la carga administrativa comparado con sistemas tradicionales</div>
            </div>
            
            <div className="benefit-node node-3 reveal delay-3">
              <div className="benefit-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                </svg>
              </div>
              <div className="node-title">Adaptabilidad</div>
              <div className="node-content">Ideal para psicólogos, neuropsicólogos y centros de rehabilitación</div>
            </div>
            {/* Líneas de conexión */}
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
            <div className="connection-line line-3"></div>
          </div>
        </div>

        {/* Tarjetas de Valor Detalladas */}
        <div className="value-cards-grid grid">
          <div className="value-card professionals reveal delay-1">
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3>Para Profesionales de la Salud</h3>
            </div>
            <div className="card-content">
              <p>
                Reduce la carga administrativa y optimiza la planificación y el seguimiento del tratamiento, 
                permitiendo un enfoque mayor en la intervención terapéutica. Esto se traduce en una mayor 
                productividad y una mejor toma de decisiones clínicas.
              </p>
              <ul className="benefits-list">
                <li>Automatización de reportes</li>
                <li>Dashboard intuitivo</li>
                <li>Seguimiento en tiempo real</li>
              </ul>
            </div>
          </div>

          <div className="value-card patients reveal delay-2">
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3>Para Pacientes</h3>
            </div>
            <div className="card-content">
              <p>
                Ofrece una experiencia sencilla y accesible para completar las evaluaciones, 
                fomentando su participación activa y compromiso con su proceso de rehabilitación.
              </p>
              <ul className="benefits-list">
                <li>Interfaz amigable</li>
                <li>Acceso desde cualquier dispositivo</li>
                <li>Progreso visualizable</li>
              </ul>
            </div>
          </div>

          <div className="value-card centers reveal delay-3">
            <div className="card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3>Para Centros de Rehabilitación</h3>
            </div>
            <div className="card-content">
              <p>
                Proporciona una herramienta unificada para la gestión operativa y clínica, 
                mejorando la eficiencia general y la calidad del servicio ofrecido.
              </p>
              <ul className="benefits-list">
                <li>Gestión centralizada</li>
                <li>Reportes estadísticos</li>
                <li>Integración completa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;