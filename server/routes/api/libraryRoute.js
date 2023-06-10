const router = require("express").Router();
const libraryController = require("../../controllers/libraryController");

// ? Route '/'
router
    .route("/")
    .post(libraryController.createLibrary)
    .get(libraryController.getAllLibraries);

module.exports = router;
