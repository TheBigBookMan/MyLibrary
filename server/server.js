// connect up mysql
const express = require("express");
const mysql = require("mysql");

// use raw sql queries for the api (good practice)

// look at bootcamp for info on how to use the raw sql and express

// could change from client/server MVC but already is similar engough? Tiny bit research into it

//  each customised category will be a new created table, figure out how to do that with sql raw query

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server running on PORT: https://localhost:${PORT}`);
});
