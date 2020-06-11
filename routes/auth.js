var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.get('/checkUsername', handle)

router.post('/register', handle.registration)

module.exports = router