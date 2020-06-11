var express = require('express');
var router = express.Router();
var handle = require('../handlers')

// to check if the username is available
router.post('/checkUsername', handle.checkUsername)

// for registering user
router.post('/register', handle.registration)

// 

module.exports = router