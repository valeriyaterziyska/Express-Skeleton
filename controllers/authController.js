const router = require("express").Router();
const authService = require("../services/authService");

router.get("/", (req, res) => {
    res.send("Authcontroller");
});

router.get("/login", (req, res) => {
    res.render('login');
});

router.post("/login", (req, res) => {
    res.redirect("/");
});

router.get("/register", (req, res) => {
    res.render('register');
});

router.post("/register", (req, res, next) => {
    const {username, password} = req.body;
    authService.register(username, password)
        .then(createdUser => {
            res.redirect("/auth/login");
        }).catch(next);

    console.log(req.body);

});

module.exports = router;
