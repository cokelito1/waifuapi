var express = require('express');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')

let PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/waifus')

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.listen(3000);
console.log('Iniciado en ' + PORT)