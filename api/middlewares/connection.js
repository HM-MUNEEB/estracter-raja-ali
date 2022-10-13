const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("servicex", "root", "123456", {
  host: process.env.HOST,
  dialect: "mysql",
});

async function connectDatabase(req, res, next) {
  try {
    await sequelize.authenticate();
    console.log("Connection with Database established");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = { connectDatabase, sequelize };
