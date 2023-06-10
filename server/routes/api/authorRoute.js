const router = require("express").Router();
const authorController = require("../../controllers/authorController");

// ? Route '/'
router.route("/").post(authorController.createAuthor);

module.exports = router;
