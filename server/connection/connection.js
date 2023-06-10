const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Summerland!5",
    // password: process.env.DB_PASSWORD,
    database: "my_library",
});

module.exports = db;
