const db = require("../connection/connection");

const genreHttp = {
    createGenre: async (req, res) => {
        const sql = `INSERT INTO genre (name) VALUES (?)`;
        const params = req.body.genreName;
        try {
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not create genre, please try again.",
            });
        }
    },
    getAllGenres: async (req, res) => {
        const sql = `SELECT * FROM genre`;
        try {
            db.query(sql, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not connect." });
        }
    },
};

module.exports = genreHttp;
