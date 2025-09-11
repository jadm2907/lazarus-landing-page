const winston = require('winston');
const path = require('path');
const fs = require('fs');

// Crear directorio de logs si no existe
const logDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

// Formato personalizado para los logs
const customFormat = winston.format.printf(({ timestamp, level, message, ...metadata }) => {
    let logMessage = `${timestamp} [${level.toUpperCase()}]: ${message}`;
    
    // Si hay metadata adicional, agregarla como JSON
    if (Object.keys(metadata).length > 0) {
        // Remover propiedades internas de winston
        const { service, ...cleanMetadata } = metadata;
        if (Object.keys(cleanMetadata).length > 0) {
            logMessage += ` ${JSON.stringify(cleanMetadata)}`;
        }
    }
    
    return logMessage;
});

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        customFormat
    ),
    defaultMeta: { service: 'lazarus-backend' },
    transports: [
        // Archivo de logs para todos los niveles
        new winston.transports.File({ 
            filename: path.join(logDir, 'backend.log'),
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                customFormat
            )
        }),
        // Archivo de logs para errores
        new winston.transports.File({ 
            filename: path.join(logDir, 'error.log'), 
            level: 'error',
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                customFormat
            )
        }),
        // Console para desarrollo
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                customFormat
            )
        })
    ]
});

// Si estamos en producción, no mostrar logs en consola
if (process.env.NODE_ENV === 'production') {
    logger.remove(winston.transports.Console);
}

// Métodos de utilidad para formatear logs con contexto
logger.withContext = (context) => {
    return {
        info: (message, meta) => logger.info(`[${context}] ${message}`, meta),
        error: (message, meta) => logger.error(`[${context}] ${message}`, meta),
        warn: (message, meta) => logger.warn(`[${context}] ${message}`, meta),
        debug: (message, meta) => logger.debug(`[${context}] ${message}`, meta)
    };
};

module.exports = logger;