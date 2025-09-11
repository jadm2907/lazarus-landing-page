const leadService = require('../services/leadService');
const logger = require('../utils/logger');

// Crear logger con contexto para este controlador
const controllerLogger = logger.withContext('LeadController');

const createLead = async (req, res) => {
    try {
        controllerLogger.info('Solicitud para crear lead recibida', { body: req.body });
        
        const lead = await leadService.createLead(req.body);
        
        controllerLogger.info('Lead creado exitosamente', { leadId: lead.id });
        
        res.status(201).json({
            success: true,
            message: 'Lead creado exitosamente',
            data: lead
        });
    } catch (error) {
        controllerLogger.error('Error al crear lead', {
            error: error.message,
            stack: error.stack
        });
        
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor al crear lead',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = {
    createLead
};