const router = require("express").Router();

app.get("/", (req, res) => {
    res.send("Authcontroller");
});

module.exports = router;
