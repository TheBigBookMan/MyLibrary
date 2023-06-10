const db = require("../connection/connection");

const authorHttp = {
    createAuthor: async (req, res) => {
        const sql = `INSERT INTO author (name) VALUES (?)`;
        const params = req.body.authorName;
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
            res.status(500).json({
                message: "Could not create, please try again.",
            });
            console.log(err);
        }
    },
    getAuthor: async (req, res) => {
        const sql = `SELECT authorId, name as authorName FROM author WHERE authorId = ?`;
        const params = req.params.authorId;
        try {
            db.query(sql, params, (err, result) => {
                if (err) {
                    res.status(400).json({ error: res.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "Could not get author, please try again.",
            });
        }
    },
};

module.exports = authorHttp;
