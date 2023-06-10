const db = require("../connection/connection");

const authorHttp = {
    createAuthor: async (req, res) => {
        const sql = `INSERT INTO author (name) VALUES (?)`;
        const params = req.body.authorName;
        console.log("HAPPENING");
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
};

module.exports = authorHttp;
