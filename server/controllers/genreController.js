const db = require("../connection/connection");

const genreHttp = {
    createGenre: async (req, res) => {
        const { genreName, description } = req.body;
        const sql = `INSERT INTO genre (name, description) VALUES (?, ?)`;
        const params = [genreName, description];
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
    getGenre: async (req, res) => {
        const sql = `SELECT genreId, name as genreName FROM genre WHERE genreId = ?`;
        const params = req.params.genreId;
        try {
            db.query(sql, params, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ message: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not get genre, please try again.",
            });
        }
    },
};

module.exports = genreHttp;
