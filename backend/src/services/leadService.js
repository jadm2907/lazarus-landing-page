// backend/src/services/leadService.js
const { Lead } = require('../models/leadModel');
const Region = require('../models/regionModel');
const TypeProfessional = require('../models/typeProfessionalModel');
const logger = require('../utils/logger');

const serviceLogger = logger.withContext('LeadService');

const createLead = async (leadData) => {
    try {
        serviceLogger.info('Creando lead en servicio', { data: leadData });
        const lead = await Lead.create(leadData);
        serviceLogger.info('Lead creado en base de datos', { leadId: lead.id });
        return lead;
    } catch (error) {
        serviceLogger.error('Error al crear lead', {
            error: error.message,
            stack: error.stack
        });
        throw error;
    }
};

const getRegions = async () => {
    try {
        serviceLogger.info('Obteniendo lista de regiones');
        const regions = await Region.findAll({
            attributes: ['region_id', 'name', 'cod_pais']
        });
        serviceLogger.info('Regiones obtenidas exitosamente', { count: regions.length });
        return regions;
    } catch (error) {
        serviceLogger.error('Error al obtener regiones', {
            error: error.message,
            stack: error.stack
        });
        throw error;
    }
};

const getTypeProfessionals = async () => {
    try {
        serviceLogger.info('Obteniendo lista de tipos de profesionales');
        const types = await TypeProfessional.findAll({
            attributes: ['type_professional_id', 'name', 'description', 'is_active'],
            where: { is_active: 1 }
        });
        serviceLogger.info('Tipos de profesionales obtenidos exitosamente', { count: types.length });
        return types;
    } catch (error) {
        serviceLogger.error('Error al obtener tipos de profesionales', {
            error: error.message,
            stack: error.stack
        });
        throw error;
    }
};

module.exports = {
    createLead,
    getRegions,
    getTypeProfessionals
};