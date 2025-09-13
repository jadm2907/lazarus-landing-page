import { useState, useEffect } from 'react';
import leadService from '../services/leadService';
import logger from '../utils/logger';

export const useContactForm = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    company_name: '',
    web: '',
    is_company: false,
    type_professional_id: '',
    region_id: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [regions, setRegions] = useState([]);
  const [professionalTypes, setProfessionalTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isOpen, setIsOpen] = useState(true); // Mostrar formulario por defecto

  // Fetch regions and professional types on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [regionsData, typesData] = await Promise.all([
          leadService.getRegions(),
          leadService.getTypeProfessionals()
        ]);
        setRegions(regionsData.data);
        setProfessionalTypes(typesData.data);
        logger.info('Datos de regiones y tipos de profesionales cargados', {
          regionsCount: regionsData.data.length,
          typesCount: typesData.data.length
        });
      } catch (err) {
        setError('Error al cargar regiones o tipos de profesionales');
        logger.error('Error al cargar datos iniciales:', {
          error: err.message
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      logger.info('Enviando formulario de contacto', { formData });

      // Prepare data for submission
      const submitData = { ...formData };
      if (!submitData.is_company) {
        delete submitData.company_name;
        delete submitData.web;
      }

      await leadService.createLead(submitData);

      setSuccess(true);
      logger.info('Formulario enviado exitosamente');

      // Reset form after successful submission
      setFormData(initialFormData);
    } catch (err) {
      const errorMessage = err.response?.data?.errors
        ? err.response.data.errors.map(e => e.msg).join(', ')
        : err.message || 'Error al enviar el formulario';
      setError(errorMessage);
      logger.error('Error en el formulario de contacto:', {
        error: errorMessage,
        formData
      });
    } finally {
      setLoading(false);
    }
  };

  const closeForm = () => {
    setIsOpen(false);
    setFormData(initialFormData); // Reiniciar formulario al cerrar
    setError(null);
    setSuccess(false);
  };

  return {
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
  };
};