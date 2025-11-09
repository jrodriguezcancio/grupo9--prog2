const olddb = require("../localData/db");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
        db.Product.findAll({
            include: [{ association: "Comment" }, { association: "User" }]
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
                    return res.send("No hay resultados para su criterio de búsqueda");
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
        // falta checkear el usuario en session , si no esta logueado no puede cargar productos
        let form = req.body;

        let productoGuardar = {
            name: form.name,
            description: form.description,
            img : form.img
        };


        db.Product.create(productoGuardar)
            .then(function (productoCreado) {
                return res.redirect("/")
            })
            .catch(function (error) {
                return res.send(error);
            })

        //res.render('product-add'); IMPORTANTE => todavia no queremos que funcione xq no esta session y cookies,
        //  no queremos manchar la db con productos sin autor
    },
   
    
};

module.exports = productController;