const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController')

router.get('/search-results', productController.searchResults);
router.post('/product-add', productController.productAdd);
router.get('/product-add', productController.productAddshow);
router.get('/:id?', productController.product);


module.exports = router;