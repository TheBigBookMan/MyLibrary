const CreateBookTable = require("./Book");
const db = require("../connection/connection");

db.query(CreateBookTable, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Success");
});
