const router = require("express").Router();

const homeController = require("./controllers/homeController");
const authcontroller = require("./controllers/authcontroller");

router.use("/", homeController);
router.use("/auth", authcontroller);

module.exports = router;
