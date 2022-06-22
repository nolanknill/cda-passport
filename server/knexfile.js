require('dotenv').config();

module.exports = {
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "passport_codealong",
    charset: "utf8",
  },
};