const olddb = require("../localData/db");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
        db.Product.findAll({
            include: [{ association: "Comment" }]
        })
            .then(function (resultados) {
                return res.render("index", { Product: resultados });
            })
            .catch(function (error) {
                return res.send(error);
            })

    },
    product: function (req, res) {
        let autoId = req.params.id;

        db.Product.findByPk(autoId, { include: [{ association: 'Comment', include: [{ association: 'User' }] }] })

            .then(function (auto) {
                if (auto) {
                    return res.render('product', { producto: auto });
                } else {
                    return res.send("Producto no encontrado");
                }
            })
            .catch(function (error) {
                return res.send(error);
            })

    },
    searchResults: function (req, res) {
        let palabraBuscada = req.query.search;
        db.Product.findAll({ 
            include: [ 
            { association: "Comment" }, 
            { association: "User" }     
        ],
            where: [
                { nombre: { [op.like]: "%" + palabraBuscada + "%" } }
            ]
        })
            .then(function (resultados) {
                return res.render("search-results", { Product: resultados });
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    productAdd: function (req, res) {
        res.render('product-add', { allproducts: db.productos, usuario: true }); 
        // recordar que no funciona xq no tiene bien el action el form, xq si es 
        // product/productadd , lo toma como un atributi de product y nos dice no encontrado
        // SOLUCION: Cambiar product add a index routes y controller
    },
   
    
};

module.exports = productController;