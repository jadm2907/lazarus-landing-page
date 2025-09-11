const { Lead } = require('../models/leadModel');
const logger = require('../utils/logger');

// Crear logger con contexto para este servicio
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

module.exports = {
    createLead
};