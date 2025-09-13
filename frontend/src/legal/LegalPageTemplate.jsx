// src/legal/LegalPageTemplate.jsx
import React from 'react';
import '../styles/LegalPages.css';

const LegalPageTemplate = ({ title, children }) => {
  return (
    <div className="legal-page-container">
      <div className="legal-header">
        <h1>{title}</h1>
        <div className="legal-breadcrumb">
          <a href="/">Inicio</a> &gt; {title}
        </div>
      </div>
      
      <div className="legal-content-container">
        {children}
      </div>
      
      <div className="legal-footer">
        <p>Para consultas sobre estos documentos, contacte a: soporte@lazarus.cl</p>
      </div>
    </div>
  );
};

export default LegalPageTemplate;