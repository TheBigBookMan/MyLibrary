const tables = require("./tables");
const junctions = require("./junctions");
const db = require("../connection/connection");

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
