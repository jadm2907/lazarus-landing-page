const { Sequelize } = require('sequelize');
const logger = require('../utils/logger');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 3306,
        dialect: 'mysql',
        logging: (msg) => logger.debug(msg), // Usar nuestro logger para las queries
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        define: {
            timestamps: true,
            underscored: true
        }
    }
);

// Test de conexión
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        logger.info('Conexión a la base de datos establecida correctamente', {
            database: process.env.DB_NAME,
            host: process.env.DB_HOST
        });
    } catch (error) {
        logger.error('Error al conectar con la base de datos:', {
            error: error.message,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST
        });
        process.exit(1);
    }
};

testConnection();

module.exports = sequelize;