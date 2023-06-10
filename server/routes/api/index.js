const router = require("express").Router();
const authorRoute = require("./authorRoute");
const bookRoute = require("./bookRoute");
const categoryRoute = require("./categoryRoute");
const libraryRoute = require("./libraryRoute");

router.use("/author", authorRoute);
// router.use("/book", bookRoute);
// router.use("/category", categoryRoute);
// router.use("/library", libraryRoute);

module.exports = router;
