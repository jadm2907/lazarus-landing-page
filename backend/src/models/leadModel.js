// backend/src/models/leadModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const logger = require('../utils/logger');
const Region = require('./regionModel');
const TypeProfessional = require('./typeProfessionalModel');

const Lead = sequelize.define('Lead', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    type_professional_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    region_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    web: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: { msg: 'El campo web debe ser una URL válida' }
        }
    },
    is_company: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
    }
}, {
    tableName: 'leads',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

Lead.belongsTo(Region, { foreignKey: 'region_id' });
Lead.belongsTo(TypeProfessional, { foreignKey: 'type_professional_id' });

logger.info('Modelo Lead definido correctamente');

module.exports = { Lead };