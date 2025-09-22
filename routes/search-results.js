const express = require('express');
const router = express.Router();
const searchResultsController = require("../controllers/search-resultsController");
const productController = require('../controllers/productController');

router.get('/', productController.searchResults)

module.exports = router;