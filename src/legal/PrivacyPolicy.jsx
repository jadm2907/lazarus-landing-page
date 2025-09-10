// src/legal/PrivacyPolicy.jsx
import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';

const PrivacyPolicy = () => {
  return (
    <LegalPageTemplate title="Política de Privacidad">
      <div className="legal-content">
        <h2>1. Recopilación de Información</h2>
        <p>Recopilamos información personal y de salud necesaria para proveer nuestros servicios, incluyendo:</p>
        <ul>
          <li>Datos de registro de profesionales</li>
          <li>Historiales clínicos de pacientes</li>
          <li>Resultados de evaluaciones psicológicas</li>
          <li>Datos de uso de la plataforma</li>
        </ul>
        
        <h2>2. Uso de la Información</h2>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Proveer y mejorar nuestros servicios</li>
          <li>Personalizar la experiencia del usuario</li>
          <li>Cumplir con obligaciones legales y regulatorias</li>
          <li>Investigar y desarrollar nuevos features</li>
        </ul>
        
        <h2>3. Protección de Datos</h2>
        <p>Implementamos medidas técnicas y organizativas para proteger los datos personales y de salud, incluyendo:</p>
        <ul>
          <li>Encriptación de datos en tránsito y en reposo</li>
          <li>Control de acceso basado en roles</li>
          <li>Auditorías regulares de seguridad</li>
          <li>Acuerdos de confidencialidad con el personal</li>
        </ul>
        
        <h2>4. Derechos de los Usuarios</h2>
        <p>Usted tiene derecho a:</p>
        <ul>
          <li>Acceder a sus datos personales</li>
          <li>Solicitar la rectificación de información inexacta</li>
          <li>Solicitar la eliminación de sus datos</li>
          <li>Oponerse al tratamiento de sus datos</li>
        </ul>
        
        <h2>5. Cumplimiento Legal</h2>
        <p>Cumplimos con la Ley 19.628 sobre Protección de Datos Personales de Chile y estándares internacionales aplicables como el GDPR para usuarios europeos.</p>
        
        <p className="legal-update">Última actualización: 10 de septiembre de 2025</p>
      </div>
    </LegalPageTemplate>
  );
};

export default PrivacyPolicy;