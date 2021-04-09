const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = (username, password) => {
    let user = new User({ username, password });

    return user.save();
};

const login = async (username, password) => {
    let user = await User.findOne({ username });

    if (!user) return Promise.reject({ message: "No such user", status: 404 });

    let areEqual = bcrypt.compare(password, user.password);
    if (!areEqual) return Promise.reject({message: "Invallid password", status: 404,});

    return user;
};

module.exports = {
    register,
    login,
};
