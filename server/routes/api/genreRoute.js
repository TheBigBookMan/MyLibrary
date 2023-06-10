const router = require("express").Router();
const genreController = require("../../controllers/genreController");

// ? Route '/'
router.route("/").post(genreController.createGenre);

module.exports = router;