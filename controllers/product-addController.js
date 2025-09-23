const db = require('../localData/db');
const productAddController = {
    productAdd: function (req, res) {
        res.render('product-add', { allproducts: db.productos, usuario: true }); /* decia ture en vez de true */
    }
}

module.exports = productAddController