const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("construction_marketplace", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
