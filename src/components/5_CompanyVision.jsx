import React, { useEffect } from 'react';
import '../App.css';
import '../styles/CompanyVision.css';
import { initScrollReveal, initParallax } from '../utils/scrollEffects.js';

const CompanyVision = () => {
  useEffect(() => {
    initScrollReveal();
    initParallax();
  }, []);

  return (
    <section id="empresa-vision" className="vision-section reveal">
      <div className="solution-bg-pattern parallax-element" data-speed="0.2"></div>
      <div className="solution-geometric-shapes">
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.2" data-type="floating-triangles"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.4" data-type="concentric-rings"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.3" data-type="hovering-hexagons"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.5" data-type="dynamic-connectors"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.1" data-type="organic-blobs"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.6" data-type="floating-cubes"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.3" data-type="geometric-waves"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.7" data-type="connected-particles"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.4" data-type="spiral-vortex"></div>
        <div className="geometric-shape shape-brain parallax-element" data-speed="0.2" data-type="shattered-shapes"></div>
      </div>
      <div className="container">
        <div className="vision-header reveal">
          <h2 className="vision-title">Innovación que Impulsa el Cuidado de la Salud Mental</h2>
          <p className="vision-subtitle">Conoce a la empresa detrás de la plataforma y su visión de futuro.</p>
        </div>

        <div className="grid">
          {/* Misión y Propósito */}
          <div className="vision-card delay-1">
            <h3>Sobre LAZARUS TECHNOLOGY SpA</h3>
            <p>
              Nuestro objeto social incluye el desarrollo de servicios de Ingeniería Informática y Tecnologías de la Información, como el diseño, desarrollo e implementación de software y soluciones integrales de TI. También ofrecemos asesorías, consultorías, y la comercialización de productos tecnológicos.
            </p>
            <p>
              Nuestro propósito principal con el producto Lazarus es resolver los desafíos que enfrentan los profesionales e instituciones de salud mental, mejorando su productividad y la toma de decisiones clínicas a través de una plataforma centralizada.
            </p>
          </div>

          {/* Visión */}
          <div className="vision-card delay-2">
            <h3>Nuestra Visión</h3>
            <p>
              Nuestra visión es ser la plataforma líder en Latinoamérica para la gestión de la salud mental y la rehabilitación cognitiva. Buscamos ser reconocidos por nuestra innovación, seguridad y el impacto positivo que generamos en la calidad de vida de los pacientes y en la eficiencia de los profesionales de la salud.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyVision;