const router = require("express").Router();
const libraryController = require("../../controllers/libraryController");

// ? Route '/'
router.route("/").post(libraryController.createLibrary);

module.exports = router;
