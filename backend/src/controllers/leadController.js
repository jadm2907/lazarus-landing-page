// backend/src/controllers/leadController.js
const { body, validationResult } = require('express-validator');
const leadService = require('../services/leadService');
const logger = require('../utils/logger');

// Crear logger con contexto para este controlador
const controllerLogger = logger.withContext('LeadController');

const createLead = [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email debe ser válido'),
    body('type_professional_id').isInt().withMessage('El tipo de profesional debe ser un ID válido'),
    body('region_id').isInt().withMessage('La región debe ser un ID válido'),
    body('message').notEmpty().withMessage('El mensaje es obligatorio'),
    body('phone').optional().isString().withMessage('El teléfono debe ser una cadena válida'),
    body('web').optional().isURL().withMessage('El campo web debe ser una URL válida'),
    body('is_company').optional().isBoolean().withMessage('is_company debe ser un booleano'),
    body('company_name')
        .if(body('is_company').equals(true))
        .notEmpty().withMessage('El nombre de la compañía es obligatorio cuando is_company es true'),

    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                controllerLogger.error('Errores de validación', { errors: errors.array() });
                return res.status(400).json({
                    success: false,
                    message: 'Errores de validación',
                    errors: errors.array()
                });
            }

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
    }
];

const getRegions = async (req, res) => {
    try {
        controllerLogger.info('Solicitud para obtener regiones recibida');
        const regions = await leadService.getRegions();
        controllerLogger.info('Regiones enviadas exitosamente', { count: regions.length });
        res.status(200).json({
            success: true,
            message: 'Regiones obtenidas exitosamente',
            data: regions
        });
    } catch (error) {
        controllerLogger.error('Error al obtener regiones', {
            error: error.message,
            stack: error.stack
        });
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor al obtener regiones',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

const getTypeProfessionals = async (req, res) => {
    try {
        controllerLogger.info('Solicitud para obtener tipos de profesionales recibida');
        const types = await leadService.getTypeProfessionals();
        controllerLogger.info('Tipos de profesionales enviados exitosamente', { count: types.length });
        res.status(200).json({
            success: true,
            message: 'Tipos de profesionales obtenidos exitosamente',
            data: types
        });
    } catch (error) {
        controllerLogger.error('Error al obtener tipos de profesionales', {
            error: error.message,
            stack: error.stack
        });
        res.status(500).json({
            success: false,
            message: 'Error interno del servidor al obtener tipos de profesionales',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};

module.exports = {
    createLead,
    getRegions,
    getTypeProfessionals
};