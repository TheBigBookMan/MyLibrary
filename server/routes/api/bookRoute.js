const router = require("express").Router();
const bookController = require("../../controllers/bookController");

// ? Route '/'
router
    .route("/")
    .post(bookController.createBook)
    .get(bookController.getAllBooks);

// ? Route '/:bookid'
router.route("/:bookId").get(bookController.getBook);

module.exports = router;
