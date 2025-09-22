const { usuario } = require("../localData/db");

const loginController = {
    loginC: function (req, res) {
        res.render('login', { usuario: false });
    }
}

module.exports = loginController