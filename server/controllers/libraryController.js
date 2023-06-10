const db = require("../connection/connection");

const libraryHttp = {
    createLibrary: async (req, res) => {
        const { libraryName, description } = req.body;
        const numBooks = 0;
        const sql = `INSERT INTO library (name, numBooks, description) VALUES (?, ?, ?)`;
        const params = [libraryName, numBooks, description];
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
            res.status(500).json({ message: "Could not create library." });
        }
    },
};

module.exports = libraryHttp;
