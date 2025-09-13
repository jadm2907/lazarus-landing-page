// frontend/src/services/leadService.js
import axios from 'axios';
import logger from '../utils/logger';

const API_URL = 'http://localhost:3000/leads';

const createLead = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    logger.info('Lead creado exitosamente', { leadId: response.data.data.id });
    return response.data;
  } catch (error) {
    logger.error('Error al crear lead', {
      error: error.message,
      response: error.response?.data
    });
    throw error;
  }
};

const getRegions = async () => {
  try {
    const response = await axios.get(`${API_URL}/regions`);
    logger.info('Regiones obtenidas', { count: response.data.data.length });
    return response.data;
  } catch (error) {
    logger.error('Error al obtener regiones', {
      error: error.message,
      response: error.response?.data
    });
    throw error;
  }
};

const getTypeProfessionals = async () => {
  try {
    const response = await axios.get(`${API_URL}/types`);
    logger.info('Tipos de profesionales obtenidos', { count: response.data.data.length });
    return response.data;
  } catch (error) {
    logger.error('Error al obtener tipos de profesionales', {
      error: error.message,
      response: error.response?.data
    });
    throw error;
  }
};

export default {
  createLead,
  getRegions,
  getTypeProfessionals
};