// backend/src/models/regionModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const logger = require('../utils/logger');

const Region = sequelize.define('Region', {
    region_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'region_id'
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    cod_pais: {
        type: DataTypes.STRING(4),
        allowNull: false
    }
}, {
    tableName: 'region',
    timestamps: false
});

logger.info('Modelo Region definido correctamente con Sequelize');

module.exports = Region;