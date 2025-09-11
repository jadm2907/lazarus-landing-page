import { useState } from 'react';
import leadService from '../services/leadService';
import logger from '../utils/logger';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    typeProfessional: '',
    region: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      logger.info('Enviando formulario de contacto', { formData });
      
      await leadService.createLead(formData);
      
      setSuccess(true);
      logger.info('Formulario enviado exitosamente');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        typeProfessional: '',
        region: ''
      });

    } catch (err) {
      setError(err.message || 'Error al enviar el formulario');
      logger.error('Error en el formulario de contacto:', {
        error: err.message,
        formData
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    loading,
    error,
    success,
    handleChange,
    handleSubmit
  };
};