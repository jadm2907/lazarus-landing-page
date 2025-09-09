import React from 'react';
import '../App.css';

const CallToAction = () => {
  return (
    <section id="contacto" className="reveal">
      <div className="container">
        <h2>¿Listo para unirte a la revolución digital en salud mental?</h2>
        <p>
          Descubre cómo LAZARUS puede transformar tu práctica clínica, mejorar tu productividad y ofrecer una mejor atención a tus pacientes.
        </p>
        <a 
          href="mailto:joseandresdonoso290723@gmail.com" 
          className="btn btn-primary"
        >
          Solicita una Demostración
        </a>
      </div>
    </section>
  );
};

export default CallToAction;