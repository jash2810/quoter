var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.get('/test', handle.test)

module.exports = router