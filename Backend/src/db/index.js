const Sequelize = require("sequelize");

const nodeMode = process.env.NODE_MODE || "development";
const dbConfig = require("./config");

const connection = new Sequelize(dbConfig[nodeMode]);

module.exports = connection;
