const { Sequelize } = require('sequelize');

module.exports = new Sequelize('telega_bot', 'postgres', 'root', {
  host: '127.0.0.1',
  port: '5432',
  dialect: 'postgres',
  logging: false,
});
