// const { Pool } = require("pg");

// create a connection pool
// const pool = new Pool({
//   host: "localhost",
//   user: "laddy",
//   database: "node-complete",
//   password: "Hook1em"
// });

// module.exports = pool;

const Sequelize = require("sequelize");
const sequelize = new Sequelize("node-complete", "laddy", "Hook1em", {
  dialect: "postgres",
  host: "localhost"
});

module.exports = sequelize;
