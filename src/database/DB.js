const { Sequelize } = require('sequelize');
const { databasePostgress } = require('../models/config.js');

const sequelize = new Sequelize(
    databasePostgress.database, 
    databasePostgress.username, 
    databasePostgress.password, 
    {
        host: databasePostgress.host,
        dialect: 'postgres',
    }
);

module.exports = sequelize;