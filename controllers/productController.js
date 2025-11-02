const olddb = require("../localData/db");
let db = require("../database/models");
// let op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
        return res.render("index" , { allproducts: db.productos, usuario: true});
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
            // luego va a tener que ser asi: res.render('product', { producto: producto });
            // asi nos trae todo, y en el otro hacerlo bien con la db
            // aca ira con findall
        }

        res.render('product', { producto: producto }); // aca ira con findby pk
    }, 
    searchResults: function (req, res) {
        const busqueda = req.query.search;
        return res.render("search-results", { termino: busqueda, allproducts: db.productos });

    },
    productAdd: function (req, res) {
        res.render('product-add', { allproducts: db.productos, usuario: true }); 
        // recordar que no funciona xq no tiene bien el action el form, xq si es 
        // product/productadd , lo toma como un atributi de product y nos dice no encontrado
        // SOLUCION: Cambiar product add a index routes y controller
    },
   
    
};

module.exports = productController;