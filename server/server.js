// connect up mysql
const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

// use raw sql queries for the api (good practice)

// look at bootcamp for info on how to use the raw sql and express

// could change from client/server MVC but already is similar engough? Tiny bit research into it

//  each customised category will be a new created table, figure out how to do that with sql raw query

// ?
// ? the db folder will contiain just temporary sql queries to drop table and reset data, whenever change in model data, only need to run once when in production
// ?

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "my_library",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("MySQL Connected");
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on PORT: https://localhost:${PORT}`);
});
