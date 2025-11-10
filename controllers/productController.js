const olddb = require("../localData/db");
let db = require("../database/models");
let op = db.Sequelize.Op;

const productController = {
    index: function (req, res) {
        db.Product.findAll({
            include: [{ association: "comment" }, { association: "user" }]
        })
            .then(function (resultados) {
                return res.render("index", { product: resultados });
            })
            .catch(function (error) {
                return res.send(error);
            })

    },
    product: function (req, res) {
        let autoId = req.params.id;

        db.Product.findByPk(autoId, { include: [{ association: 'comment', include: [{ association: 'user' }] }] })

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
            { association: "comment" }, 
            { association: "user" }     
        ],
            where: [
                { nombre: { [op.like]: "%" + palabraBuscada + "%" } }
            ]
        })
            .then(function (resultados) {
                return res.render("search-results", { product: resultados });
            })
            .catch(function (error) {
                return res.send(error);
            })
    },
    productAddshow: function(req, res) {
        if (req.session.user == undefined) {
            return res.redirect("/users/login")
        } else {
            return res.render('product-add')
        }
    },
    productAdd: function (req, res) {
        let form = req.body;

        let productoGuardar = {
            idUsuario : req.session.user.id,
            nombre: form.name,
            precio : form.price,
            descripcion: form.description,
            imagen : form.img
        };


        db.Product.create(productoGuardar)
            .then(function (productoCreado) {
                return res.redirect("/")
            })
            .catch(function (error) {
                return res.send(error);
            })

    },
   
    
};

module.exports = productController;