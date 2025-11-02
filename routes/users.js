const express = require('express');
const router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

const usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.get('/register', usersController.register)
router.get('/profile', usersController.profile);

module.exports = router;