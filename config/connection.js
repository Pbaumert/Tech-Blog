const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.blog,
  process.env.Postgres,
  process.env.Socasani2024!,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
);

module.exports = sequelize;
