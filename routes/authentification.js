var express = require("express");
var router = express.Router();
const { login } = require('../controllers/userController');
const { logout } = require('../controllers/userController');
const { createUser} = require('../controllers/userController');

//login router

router.post('/login',login);
router.post('/logout', logout);
router.post('/signup', createUser);






module.exports = router;
