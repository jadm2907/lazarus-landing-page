// src/legal/TermsOfService.jsx
import React from 'react';
import LegalPageTemplate from './LegalPageTemplate';

const TermsOfService = () => {
  return (
    <LegalPageTemplate title="Términos y Condiciones de Uso">
      <div className="legal-content">
        <h2>1. Aceptación de los Términos</h2>
        <p>Al acceder y utilizar la plataforma LAZARUS de LAZARUS TECHNOLOGY SpA (RUT: 78.243.448-9), usted acepta cumplir con estos términos y condiciones.</p>
        
        <h2>2. Descripción del Servicio</h2>
        <p>LAZARUS es una plataforma digital de gestión de salud mental y rehabilitación que ofrece:</p>
        <ul>
          <li>Gestión de historiales clínicos electrónicos (HCE)</li>
          <li>Evaluaciones psicológicas integradas</li>
          <li>Planificación y seguimiento de tratamientos</li>
          <li>Herramientas de seguridad y privacidad de datos</li>
        </ul>
        
        <h2>3. Registro y Cuenta de Usuario</h2>
        <p>Los profesionales de la salud deben registrarse con información verídica y actualizada. Cada usuario es responsable de mantener la confidencialidad de sus credenciales.</p>
        
        <h2>4. Propiedad Intelectual</h2>
        <p>Todos los derechos de propiedad intelectual sobre la plataforma LAZARUS son propiedad de LAZARUS TECHNOLOGY SpA. Queda prohibida la reproducción no autorizada.</p>
        
        <h2>5. Limitación de Responsabilidad</h2>
        <p>LAZARUS TECHNOLOGY SpA no se hace responsable por daños indirectos o consecuentes resultantes del uso de la plataforma.</p>
        
        <h2>6. Ley Aplicable y Jurisdicción</h2>
        <p>Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa se someterá a los tribunales de la comuna de Providencia.</p>
        
        <p className="legal-update">Última actualización: 10 de septiembre de 2025</p>
      </div>
    </LegalPageTemplate>
  );
};

export default TermsOfService;