//this file is to set up how my DB should look like. Basically setting up Schema for DB.

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean


});

var Todos = mongoose.model('Todos', todoSchema);

//exporting so it can be accessed by other files.
module.exports = Todos;