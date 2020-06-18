var express = require('express');
var router = express.Router();
var handle = require('../handlers')

router.post('/myprofile', handle.myprofile)

module.exports = router