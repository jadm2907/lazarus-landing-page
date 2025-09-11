const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const sequelize = require('./config/db');
const logger = require('./utils/logger');

// Importar rutas
const leadRoutes = require('./routes/leadRoutes');

const app = express();

// Middleware de seguridad
app.use(helmet());

// CORS configurado para desarrollo
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://tudominio.com'] 
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true
}));

// Logging de requests
app.use(morgan('combined', {
    stream: {
        write: (message) => {
            const trimmedMessage = message.trim();
            logger.info(`[HTTP] ${trimmedMessage}`);
        }
    }
}));

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Routes
app.use('/api/leads', leadRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    logger.info('Health check realizado');
    res.status(200).json({ 
        status: 'OK', 
        message: 'Servidor funcionando correctamente',
        timestamp: new Date().toISOString()
    });
});

// Manejo de rutas no encontradas
app.use('*', (req, res) => {
    logger.warn('Ruta no encontrada', { 
        path: req.originalUrl,
        method: req.method 
    });
    res.status(404).json({ 
        error: 'Ruta no encontrada',
        message: `La ruta ${req.originalUrl} no existe` 
    });
});

// Manejo global de errores
app.use((error, req, res, next) => {
    logger.error('Error no manejado en la aplicación', {
        error: error.message,
        stack: error.stack,
        path: req.originalUrl,
        method: req.method
    });

    res.status(500).json({
        error: 'Error interno del servidor',
        message: process.env.NODE_ENV === 'development' 
            ? error.message 
            : 'Ocurrió un error inesperado'
    });
});

module.exports = app;