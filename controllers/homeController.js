const router = require("express").Router();
const isAutorise = require("../middlewares/isAuthorize");

router.get("/", (req, res) => {
    res.render("home");
});

// router.get("/secret-action", isAuthorise, (req, res) => {

// })

module.exports = router;
