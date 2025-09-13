// src/legal/LegalNotice.jsx
import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';

const LegalNotice = () => {
  return (
    <LegalPageTemplate title="Aviso Legal">
      <div className="legal-content">
        <h2>Información Legal de LAZARUS TECHNOLOGY SpA</h2>
        
        <div className="company-info">
          <p><strong>Razón Social:</strong> LAZARUS TECHNOLOGY SpA</p>
          <p><strong>RUT:</strong> 78.243.448-9</p>
          <p><strong>Fecha de Constitución:</strong> 02 de septiembre de 2025</p>
          <p><strong>Domicilio:</strong> Comuna de Providencia, Región Metropolitana de Santiago, Chile</p>
          <p><strong>Representante Legal:</strong> José Andrés Donoso Molina, RUT 15.329.186-1</p>
          <p><strong>Email de Contacto:</strong> contacto@lazarus.cl</p>
        </div>
        
        <h2>Objeto Social</h2>
        <p>De acuerdo con sus estatutos, LAZARUS TECHNOLOGY SpA tiene por objeto:</p>
        <ul>
          <li>Desarrollo de servicios de Ingeniería Informática y Tecnologías de la Información</li>
          <li>Diseño, desarrollo e implementación de software y soluciones integrales de TI</li>
          <li>Asesorías y consultorías tecnológicas</li>
          <li>Comercialización de productos tecnológicos</li>
          <li>Gestión de proyectos tecnológicos para entidades públicas y privadas</li>
        </ul>
        
        <h2>Propiedad Intelectual</h2>
        <p>Todos los contenidos de este sitio web, incluyendo pero no limitado a textos, gráficos, logotipos, y software, son propiedad de LAZARUS TECHNOLOGY SpA o de sus licenciantes y están protegidos por las leyes de propiedad intelectual chilenas e internacionales.</p>
        
        <h2>Limitación de Responsabilidad</h2>
        <p>LAZARUS TECHNOLOGY SpA no se hace responsable de los daños que pudieran derivarse de interferencias, omisiones, interrupciones, virus telefónicos o desconexiones en el funcionamiento operativo del sistema electrónico.</p>
        
        <p className="legal-update">Última actualización: 10 de septiembre de 2025</p>
      </div>
    </LegalPageTemplate>
  );
};

export default LegalNotice;