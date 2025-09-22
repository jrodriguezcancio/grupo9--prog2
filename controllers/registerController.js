const registerController = {
    register: function(req, res){
        res.render('register', { allproducts: db.productos, usuario: false });
    }
}

module.exports = registerController