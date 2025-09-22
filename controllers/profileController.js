
const db = require('../localData/db');
const database = require('../localData/db');

const profileController = {
    profile: function (req, res) {
        const usuario = database.usuario;
        res.render('profile', { usuario , allproducts: db.productos});
    }
};

module.exports = profileController;
