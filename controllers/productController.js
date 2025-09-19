const db = require("../localData/db");

const productController = {
    index: function (req, res) {
        return res.render("index" , { allproducts: db.productos });
    } ,
    product: function(req, res) {
        const id = req.params.id;
        let producto = null;

        for (let i = 0; i < db.productos.length; i++) {
            if (db.productos[i].id == id) {
                producto = db.productos[i];
                break;
            }
        }

        if (!producto) {
            return res.send('Producto no encontrado');
        }

        res.render('product', { producto: producto });
    }
};

module.exports = productController;