import React from 'react';
import '../App.css';

const CompanyVision = () => {
  return (
    <section id="empresa-vision" className="reveal">
      <div className="container">
        <h2>Innovación que Impulsa el Cuidado de la Salud Mental</h2>
        <p>Conoce a la empresa detrás de la plataforma y su visión de futuro.</p>

        <div className="grid">
          {/* Misión y Propósito */}
          <div className="vision-card delay-1">
            <h3>Sobre LAZARUS TECHNOLOGY SpA</h3>
            <p>
              Somos **LAZARUS TECHNOLOGY SpA**, una empresa constituida el 02 de septiembre de 2025. Nuestro objeto social incluye el desarrollo de servicios de Ingeniería Informática y Tecnologías de la Información, como el diseño, desarrollo e implementación de software y soluciones integrales de TI. También ofrecemos asesorías, consultorías, y la comercialización de productos tecnológicos.
            </p>
            <p>
              Nuestro propósito principal con el producto Lazarus SGCR es resolver los desafíos que enfrentan los profesionales e instituciones de salud mental, mejorando su productividad y la toma de decisiones clínicas a través de una plataforma centralizada.
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