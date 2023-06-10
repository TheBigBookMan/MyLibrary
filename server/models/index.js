const tables = require("./tables");
const junctions = require("./junctions");
const db = require("../connection/connection");

// TODO need to make the tables being imprted an array of queries so can loop throufh and make he queries for them

tables.forEach((query) => {
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success");
    });
});

junctions.forEach((query) => {
    db.query(query, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Success");
    });
});
