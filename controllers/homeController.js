const router = require("express").Router();

app.get("/", (req, res) => {
    res.send("Server is runnig");
});

module.exports = router;
