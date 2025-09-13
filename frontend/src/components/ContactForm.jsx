import React, { useRef, useEffect } from 'react';
import { useContactForm } from '../hooks/useContactForm';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const { 
    formData, 
    regions, 
    professionalTypes, 
    loading, 
    error, 
    success, 
    isOpen,
    handleChange, 
    handleSubmit, 
    closeForm 
  } = useContactForm();
  const popupRef = useRef(null);

  // Detectar clics fuera del popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closeForm();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeForm]);

  // Cerrar el popup tras un envío exitoso
  useEffect(() => {
    if (success) {
      setTimeout(() => {
        closeForm();
      }, 2000); // Espera 2 segundos para mostrar el mensaje de éxito
    }
  }, [success, closeForm]);

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content" ref={popupRef}>
            <button
              className="close-button"
              onClick={closeForm}
              aria-label="Cerrar formulario"
            >
              ×
            </button>
            <div className="contact-form-container">
              <h2>Contáctanos</h2>

              {success && (
                <small className="form-status success">
                  ¡Gracias por contactarnos! Te responderemos pronto.
                </small>
              )}

              {error && (
                <small className="form-status error">
                  {error}
                </small>
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
                    <span className="field-hint">Ingresa tu nombre completo</span>
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
                    <span className="field-hint">Usa un email válido</span>
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
                    <span className="field-hint">Ejemplo: +56912345678</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="is_company">
                      <input
                        type="checkbox"
                        id="is_company"
                        name="is_company"
                        checked={formData.is_company}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      ¿Representas a una empresa?
                    </label>
                  </div>
                </div>

                <div className={`conditional-fields ${formData.is_company ? 'visible' : ''}`}>
                  <div className="company-fields">
                    <div className="form-group">
                      <label htmlFor="company_name">Nombre de la empresa *</label>
                      <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        value={formData.company_name}
                        onChange={handleChange}
                        required={formData.is_company}
                        disabled={loading}
                      />
                      <span className="field-hint">Ingresa el nombre de tu empresa</span>
                    </div>

                    <div className="form-group">
                      <label htmlFor="web">Sitio web</label>
                      <input
                        type="url"
                        id="web"
                        name="web"
                        value={formData.web}
                        onChange={handleChange}
                        disabled={loading}
                      />
                      <span className="field-hint">Ejemplo: https://www.tuempresa.com</span>
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="type_professional_id">Tipo de profesional *</label>
                    <select
                      id="type_professional_id"
                      name="type_professional_id"
                      value={formData.type_professional_id}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    >
                      <option value="">Selecciona una opción</option>
                      {professionalTypes.map(type => (
                        <option key={type.type_professional_id} value={type.type_professional_id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                    <span className="field-hint">Selecciona tu profesión o rol</span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="region_id">Región *</label>
                    <select
                      id="region_id"
                      name="region_id"
                      value={formData.region_id}
                      onChange={handleChange}
                      required
                      disabled={loading}
                    >
                      <option value="">Selecciona una región</option>
                      {regions.map(region => (
                        <option key={region.region_id} value={region.region_id}>
                          {region.name}
                        </option>
                      ))}
                    </select>
                    <span className="field-hint">Selecciona tu región</span>
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
                  <span className="field-hint">Describe tu consulta o requerimiento</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="submit-button"
                >
                  {loading ? (
                    <span className="loading-message">Enviando...</span>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;