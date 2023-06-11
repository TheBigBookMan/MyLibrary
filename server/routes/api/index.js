const router = require("express").Router();
const authorRoute = require("./authorRoute");
const bookRoute = require("./bookRoute");
const genreRoute = require("./genreRoute");
const libraryRoute = require("./libraryRoute");

router.use("/author", authorRoute);
router.use("/book", bookRoute);
router.use("/genre", genreRoute);
router.use("/library", libraryRoute);

module.exports = router;
