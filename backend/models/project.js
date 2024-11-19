const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./user");

const Project = sequelize.define("Project", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  budget: { type: DataTypes.INTEGER, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  deadline: { type: DataTypes.DATE, allowNull: false },
});

Project.belongsTo(User, { as: "contractor" });
module.exports = Project;
