const express = require('express');
const router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
 // res.send('respond with a resource');
//});

const usersController = require('../controllers/usersController');

router.get('/profile', usersController.profile);
router.get('/profile/:id', usersController.profile);

router.get('/register', usersController.register)
router.post('/newuser', usersController.createRegister);

router.get('/login', usersController.login);
router.post("/login", usersController.processLogin);

router.post('/logout', usersController.logout)

module.exports = router;