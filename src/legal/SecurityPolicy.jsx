// src/legal/SecurityPolicy.jsx
import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';

const SecurityPolicy = () => {
  return (
    <LegalPageTemplate title="Política de Seguridad">
      <div className="legal-content">
        <h2>1. Compromiso de Seguridad</h2>
        <p>LAZARUS TECHNOLOGY SpA se compromete a proteger la confidencialidad, integridad y disponibilidad de la información de nuestros usuarios mediante la implementación de medidas de seguridad robustas.</p>
        
        <h2>2. Medidas Técnicas</h2>
        <p>Implementamos las siguientes medidas técnicas de seguridad:</p>
        <ul>
          <li>Encriptación AES-256 para datos en reposo</li>
          <li>Protocolos TLS 1.3 para datos en tránsito</li>
          <li>Autenticación multifactor para acceso administrativo</li>
          <li>Monitoreo continuo de seguridad</li>
          <li>Copias de seguridad diarias y redundantes</li>
        </ul>
        
        <h2>3. Medidas Organizativas</h2>
        <p>Hemos establecido políticas y procedimientos internos que incluyen:</p>
        <ul>
          <li>Capacitación obligatoria en seguridad para todo el personal</li>
          <li>Controles de acceso basados en el principio de mínimo privilegio</li>
          <li>Acuerdos de confidencialidad con empleados y contratistas</li>
          <li>Procedimientos de respuesta a incidentes de seguridad</li>
        </ul>
        
        <h2>4. Cumplimiento Normativo</h2>
        <p>Nuestra plataforma cumple con:</p>
        <ul>
          <li>Ley 19.628 sobre Protección de Datos Personales (Chile)</li>
          <li>Regulaciones HIPAA para datos de salud (para usuarios internacionales)</li>
          <li>Reglamento GDPR (para usuarios europeos)</li>
          <li>Normativas locales de historiales clínicos electrónicos</li>
        </ul>
        
        <h2>5. Notificación de Incidentes</h2>
        <p>En caso de una violación de seguridad que afecte datos personales, notificaremos a las autoridades competentes y a los usuarios afectados dentro de los plazos legalmente establecidos.</p>
        
        <p className="legal-update">Última actualización: 10 de septiembre de 2025</p>
      </div>
    </LegalPageTemplate>
  );
};

export default SecurityPolicy;