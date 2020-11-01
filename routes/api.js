var express = require('express');
var router = express.Router();

var Waifus = require('../models/waifu')
var Series = require('../models/serie')

Waifus.methods(['get', 'put', 'post', 'delete']);
Waifus.register(router, '/waifus');

Series.methods(['get', 'put', 'post', 'delete']);
Series.register(router, '/series');

module.exports = router;