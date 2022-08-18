const { DataTypes, Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../database/DB.js');

class Task extends Model {}

Task.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4(),
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    // Other model options go here  
    sequelize, // We need to pass the connection instance
    modelName: 'Task' // We need to choose the model name
});

/* 
// the defined model is the class itself
console.log(Task === sequelize.models.Task); // true */

module.exports = Task;