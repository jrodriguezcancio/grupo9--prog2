const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/:id?', productController.product);
router.get('/search-results', productController.searchResults);
router.get('/product-add', productController.productAdd);


module.exports = router;