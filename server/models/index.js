const tables = require("./tables");
const db = require("../connection/connection");

// TODO need to make the tables being imprted an array of queries so can loop throufh and make he queries for them

console.log(tables);

tables.forEach((query) => {
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success");
    });
});
