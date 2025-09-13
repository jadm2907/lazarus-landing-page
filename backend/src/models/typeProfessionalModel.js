// backend/src/models/typeProfessionalModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const logger = require('../utils/logger');

const TypeProfessional = sequelize.define('TypeProfessional', {
    type_professional_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(145),
        allowNull: false
    },
    is_active: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    tableName: 'type_professional',
    timestamps: false
});

logger.info('Modelo TypeProfessional definido correctamente con Sequelize');

module.exports = TypeProfessional;