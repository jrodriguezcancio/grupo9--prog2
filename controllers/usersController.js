const olddb = require('../localData/db');
let db = require("../database/models");

const usersController = {
    register: function(req, res){ //solo debe aparecer si no esta loagueado con un if, se enacrga de renderizar nada mas
        res.render('register');
    },
    createRegister: function(req, res){ //encargado de procesar el registro y cargarlo en la db, POST
        res.render('register');
    },
    profile: function (req, res) { // 
        const usuario = db.usuario;
        res.render('profile');
    },
    login : function (req, res) { //solo debe aparecer si no esta loagueado con un if, se enacrga de renderizar nada mas
        return res.render("login");
    },
    processLogin: function (req, res) {
        res.render("/") //falta todo session y cookies para acceder a la db y ver si el form coincide con la db, POST
    },
    logout: function (req, res) { //todavia no va a funcionar , hay que procesar el login para hacer un logout
        req.session.destroy();
        res.clearCookie('userData');

        return res.redirect("/");
    }

}

module.exports = usersController