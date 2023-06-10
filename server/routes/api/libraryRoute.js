const router = require("express").Router();
const libraryController = require("../../controllers/libraryController");

// ? Route '/'
router
    .route("/")
    .post(libraryController.createLibrary)
    .get(libraryController.getAllLibraries);

// ? Route '/:libraryId'
router
    .route("/:libraryId")
    .get(libraryController.getLibrary)
    .put(libraryController.updateLibrary);

module.exports = router;
