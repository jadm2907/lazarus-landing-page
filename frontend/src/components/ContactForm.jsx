import React from 'react';
import { useContactForm } from '../hooks/useContactForm';
import './ContactForm.css';

const ContactForm = () => {
  const {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <div className="contact-form-container">
      <h2>Contáctanos</h2>
      
      {success && (
        <div className="success-message">
          ¡Gracias por contactarnos! Te responderemos pronto.
        </div>
      )}
      
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nombre completo *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="typeProfessional">Tipo de profesional</label>
            <select
              id="typeProfessional"
              name="typeProfessional"
              value={formData.typeProfessional}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Selecciona una opción</option>
              <option value="developer">Desarrollador</option>
              <option value="designer">Diseñador</option>
              <option value="manager">Gerente</option>
              <option value="other">Otro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="region">Región</label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleChange}
              disabled={loading}
            >
              <option value="">Selecciona una región</option>
              <option value="norte">Norte</option>
              <option value="centro">Centro</option>
              <option value="sur">Sur</option>
              <option value="international">Internacional</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            disabled={loading}
            placeholder="Cuéntanos cómo podemos ayudarte..."
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="submit-button"
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;