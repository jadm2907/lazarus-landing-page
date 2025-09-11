const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Region = sequelize.define('Region', {
    regionid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
    cod_pais: {
        type: DataTypes.STRING(4),
        allowNull: false,
    },
}, {
    tableName: 'region',
    timestamps: false,
});

module.exports = Region;