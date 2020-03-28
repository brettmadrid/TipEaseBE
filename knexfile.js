require("dotenv").config();
const localPg = {
  host: "localhost",
  database: process.env.DB_NAME,
  user: "",
  password: ""
};

const dbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./database/tipease.db3"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg", // remember to add pg dependency
    connection: dbConnection,
    // connection: {
    //   database: "my_db",
    //   user: "username",
    //   password: "password"
    // },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
