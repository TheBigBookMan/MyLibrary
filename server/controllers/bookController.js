const db = require("../connection/connection");

const bookHttp = {
    createBook: async (req, res) => {
        const sql = `INSERT INTO book (title, starRating, numRatings, image, datePublished, numPages, description, haveRead) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
        const {
            bookTitle,
            starRating,
            numRatings,
            image,
            datePublished,
            numPages,
            description,
        } = req.body;
        const haveRead = false;
        const params = [
            bookTitle,
            starRating,
            numRatings,
            image,
            datePublished,
            numPages,
            description,
            haveRead,
        ];
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
            res.status(500).json({ message: "Could not create book" });
        }
    },
    getAllBooks: async (req, res) => {
        const sql = `SELECT * FROM book`;
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
            res.status(500).json({ message: "Could not get all books" });
        }
    },
    getBook: async (req, res) => {
        const sql = `SELECT bookId, title AS bookTitle, starRating, numRatings, image, datePublished, numPages, description, haveRead FROM book WHERE bookId = ?`;
        const { bookId } = req.params;
        try {
            db.query(sql, bookId, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not get book" });
        }
    },
    updateReadStatus: async (req, res) => {
        const sql = `UPDATE book SET haveRead = NOT haveRead WHERE bookId = ?`;
        const { bookId } = req.params;
        try {
            db.query(sql, bookId, (err, result) => {
                if (err) {
                    console.log(err);
                    res.status(400).json({ error: err.message });
                    return;
                }
                res.json(result);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({ message: "Could not update book" });
        }
    },
};

module.exports = bookHttp;
