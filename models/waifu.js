const { mongo } = require('mongoose');
var restful = require('node-restful')
var mongoose = restful.mongoose;

var waifuSchema = new mongoose.Schema({
    nombre: String,
    image_url: String,
    serie_id: String
});

module.exports = restful.model('Waifus', waifuSchema);