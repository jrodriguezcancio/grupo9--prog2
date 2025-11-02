const olddb = require('../localData/db');
let db = require("../database/models");

const usersController = {
    register: function(req, res){
        res.render('register', { allproducts: db.productos, usuario: false });
    },
    login : function (req, res) {
        const busqueda = req.query.search;
        return res.render("login", { termino: busqueda, allproducts: db.productos });
    },
    profile: function (req, res) {
        const usuario = db.usuario;
        res.render('profile', { usuario:true , allproducts: db.productos});
    },

}

module.exports = usersController