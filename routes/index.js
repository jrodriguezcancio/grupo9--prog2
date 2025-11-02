var express = require('express');
var router = express.Router();

const productController = require('../controllers/productController');
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', productController.index);

// router.get('/', mainController.main);

module.exports = router;