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
    getAllLibraries: async (req, res) => {
        const sql = `SELECT * FROM library`;
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
            res.status(500).json({ message: "Could not get all libraries" });
        }
    },
    getLibrary: async (req, res) => {
        const sql = `SELECT libraryId, name as libraryName, numBooks, description FROM library WHERE libraryId = ?`;
        const { libraryId } = req.params;
        try {
            db.query(sql, libraryId, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not get library" });
        }
    },
    updateLibrary: async (req, res) => {
        const sql = `UPDATE library SET name = ?, description = ? WHERE libraryId = ?`;
        const { libraryName, description } = req.body;
        const { libraryId } = req.params;
        const params = [libraryName, description, libraryId];
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
            res.status(500).json({ message: "Could not update library." });
        }
    },
    deleteLibrary: async (req, res) => {
        const sql = `DELETE FROM library WHERE libraryId = ?`;
        const { libraryId } = req.params;
        try {
            db.query(sql, libraryId, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not delete library" });
        }
    },
};

module.exports = libraryHttp;
