const { mongo } = require('mongoose');
var restful = require('node-restful')
var mongoose = restful.mongoose;

var serieSchema = new mongoose.Schema({
    nombre: String,
    cantidad_capitulos: Number,
});

module.exports = restful.model('Serie', serieSchema);