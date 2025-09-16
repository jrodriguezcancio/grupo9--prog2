const express = require('express');
const router = express.Router();
const loginController  = require('../controllers/loginController');
router.get('/', loginController.loginC);

module.exports = router;