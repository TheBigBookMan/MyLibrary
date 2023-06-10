const router = require("express").Router();
const genreController = require("../../controllers/genreController");

// ? Route '/'
router
    .route("/")
    .post(genreController.createGenre)
    .get(genreController.getAllGenres);

// ? Route '/:genreId'
router.route("/:genreId").get(genreController.getGenre);

module.exports = router;
