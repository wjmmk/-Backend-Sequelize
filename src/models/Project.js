const { DataTypes, Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../database/DB.js');
const Task = require('./Taks');

class Project extends Model {}

Project.init({
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
  priority: {
    type: DataTypes.INTEGER,
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING
    // allowNull defaults to true
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Project' // We need to choose the model name
});

/* // the defined model is the class itself
console.log(Project === sequelize.models.Project); // true */

Project.hasMany(Task, {foreignKey: 'projectId', as: 'tasks'});
Task.belongsTo(Project, {foreignKey: 'projectId', as: 'project'});

module.exports = Project;