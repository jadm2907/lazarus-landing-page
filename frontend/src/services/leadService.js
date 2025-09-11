import logger from '../utils/logger';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const leadService = {
  // Crear un nuevo lead
  createLead: async (leadData) => {
    try {
      logger.info('Enviando lead al backend', { data: leadData });
      
      const response = await fetch(`${API_BASE_URL}/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const result = await response.json();
      logger.info('Lead enviado exitosamente', { result });
      
      return result;
    } catch (error) {
      logger.error('Error al enviar lead:', {
        error: error.message,
        data: leadData
      });
      throw error;
    }
  },

  // Obtener todos los leads (si necesitas esta funcionalidad)
  getAllLeads: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/leads`);
      
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      logger.error('Error al obtener leads:', error);
      throw error;
    }
  }
};

export default leadService;