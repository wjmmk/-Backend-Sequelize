const { DataTypes, Model } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../database/DB.js');
const Project = require('./Project');

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4(),
    primaryKey: true
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  birthDate: {
    type: DataTypes.DATE
    // allowNull defaults to true
    },
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

User.hasMany(Project, {foreignKey: 'userId', as: 'Projects'});
Project.belongsTo(User, {foreignKey: 'userId', as: 'User'});

/* // the defined model is the class itself
console.log(User === sequelize.models.User); // true */

module.exports = User;