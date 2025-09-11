import React, { useState, useEffect } from 'react';
import '../styles/ContactForm.css';

const ContactForm = ({ initialMessage = '', onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: initialMessage,
    company_name: '',
    phone: '',
    type_professional: '',
    web: '',
    isCompany: false,
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    setFormData((prev) => ({ ...prev, message: initialMessage }));
  }, [initialMessage]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('¡Mensaje enviado con éxito!');
        setFormData({
          name: '',
          email: '',
          message: initialMessage,
          company_name: '',
          phone: '',
          type_professional: '',
          web: '',
          isCompany: false,
        });
        setTimeout(onClose, 2000);
      } else {
        setStatus('Error al enviar el mensaje. Intenta de nuevo.');
      }
    } catch (error) {
      setStatus('Error al enviar el mensaje. Intenta de nuevo.');
    }
  };

  return (
    <div className="contact-form-container" style={{ position: 'relative', maxWidth: '500px', width: '90%', margin: '0 auto' }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          color: 'var(--lazarus-white)',
          fontSize: '1.5rem',
          cursor: 'pointer',
        }}
      >
        ✕
      </button>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
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
            placeholder="tu@email.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="type_professional">Tipo de profesional *</label>
          <select
            id="type_professional"
            name="type_professional"
            value={formData.type_professional}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Selecciona una opción</option>
            <option value="psychologist">Psicólogo</option>
            <option value="neuropsychologist">Neuropsicólogo</option>
            <option value="rehabilitation_center">Centro de rehabilitación</option>
            <option value="other">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="isCompany"
              checked={formData.isCompany}
              onChange={handleChange}
            />
            ¿Representas una empresa?
          </label>
        </div>
        {formData.isCompany && (
          <>
            <div className="form-group">
              <label htmlFor="company_name">Nombre de la empresa</label>
              <input
                type="text"
                id="company_name"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Nombre de la empresa"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56912345678"
              />
            </div>
            <div className="form-group">
              <label htmlFor="web">Sitio web</label>
              <input
                type="url"
                id="web"
                name="web"
                value={formData.web}
                onChange={handleChange}
                placeholder="https://tu-sitio.com"
              />
            </div>
          </>
        )}
        <div className="form-group">
          <label htmlFor="message">Mensaje *</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>
        <button type="submit" className="form-submit">Enviar</button>
        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;