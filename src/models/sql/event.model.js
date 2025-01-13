const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db.config');
const Club = require('./club.model');

const Event = sequelize.define('Event', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  clubId: {
    type: DataTypes.INTEGER,
    references: {
      model: Club,
      key: 'id',
    },
  },
});

Event.belongsTo(Club, { foreignKey: 'clubId' });

module.exports = Event;