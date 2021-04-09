const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Authcontroller");
});

module.exports = router;
