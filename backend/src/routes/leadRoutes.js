// backend/src/routes/leadRoutes.js
const express = require('express');
const router = express.Router();
const leadController = require('../controllers/leadController');
const logger = require('../utils/logger');

// Middleware para logging de rutas
router.use((req, res, next) => {
    const routeLogger = logger.withContext(`${req.method} ${req.path}`);
    req.logger = routeLogger;
    next();
});

router.post('/', leadController.createLead);
router.get('/regions', leadController.getRegions);
router.get('/types', leadController.getTypeProfessionals);

module.exports = router;