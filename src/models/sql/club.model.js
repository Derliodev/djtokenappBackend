const { DataTypes } = require('sequelize');
const Event = require('./event.model');
const sequelize = require('../../config/db.config');

const Club = sequelize.define('Club', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

Club.hasMany(Event, { foreignKey: 'clubId' });

module.exports = Club;