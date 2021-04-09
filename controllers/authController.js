const router = require("express").Router();
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const authService = require("../services/authService");

router.get("/", (req, res) => {
    res.send("Authcontroller");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", (req, res, next) => {
    const { username, password } = req.body;
    authService
        .login(username, password)
        .then((user) => {
            res.redirect("/");
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post(
    "/register",
    body("password-repeat")
        .trim()
        .custom((value, { req }) => {
            if (value != req.body.password) {
                return Promise.reject("Password missmatch!");
            }
        }),
    (req, res, next) => {
        let errors = validationResult(req).array();

        //TODO: rework needed
        if (errors.length > 0) {
            let error = errors[0];

            error.message = error.msg;
            return next(error);
        }

        const { username, password } = req.body;

        authService
            .register(username, password)
            .then((createdUser) => {
                console.log(createdUser);
                res.redirect("/auth/login");
            })
            .catch(next);
    }
);

module.exports = router;
