require('dotenv').config();
const logger = require('./src/utils/logger');

logger.info('Iniciando aplicación backend...', {
    nodeVersion: process.version,
    environment: process.env.NODE_ENV
});

// Manejo de excepciones no capturadas
process.on('uncaughtException', (error) => {
    logger.error('Excepción no capturada:', {
        error: error.message,
        stack: error.stack
    });
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    logger.error('Promise rejection no manejado:', {
        reason: reason.message,
        promise: promise
    });
    process.exit(1);
});

// Importar app después de configurar los manejadores de errores
try {
    const app = require('./src/app');
    const sequelize = require('./src/config/db');
    
    const startServer = async () => {
        try {
            // Sincronizar base de datos
            await sequelize.sync({ alter: process.env.NODE_ENV === 'development' });
            logger.info('Base de datos sincronizada correctamente');

            const PORT = process.env.PORT || 3000;
            
            app.listen(PORT, () => {
                logger.info('Servidor backend iniciado correctamente', {
                    port: PORT,
                    environment: process.env.NODE_ENV,
                    database: process.env.DB_NAME
                });
            });

        } catch (error) {
            logger.error('Error al iniciar el servidor:', {
                error: error.message,
                stack: error.stack
            });
            process.exit(1);
        }
    };

    startServer();
    
} catch (error) {
    logger.error('Error al cargar la aplicación:', {
        error: error.message,
        stack: error.stack
    });
    process.exit(1);
}