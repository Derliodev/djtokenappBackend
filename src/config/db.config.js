const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: process.env.DB_DIALECT || 'mysql',
  logging: process.env.SEQUELIZE_LOGGING === 'true' ? console.log : false
});

sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la base de datos MySQL');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos MySQL:', err);
  });


module.exports = sequelize;