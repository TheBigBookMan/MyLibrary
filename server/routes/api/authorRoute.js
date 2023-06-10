const router = require("express").Router();
const authorController = require("../../controllers/authorController");

// ? Route '/'
router.route("/").post(authorController.createAuthor);

// ? Route '/:authorId'
router.route("/:authorId").get(authorController.getAuthor);

module.exports = router;
