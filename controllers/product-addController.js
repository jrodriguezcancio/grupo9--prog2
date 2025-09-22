const productAddController = {
    productAdd: function (req, res) {
        res.render('product-add', { allproducts: db.productos, usuario: false }); 
    }
}

module.exports = productAddController