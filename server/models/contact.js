/*Created by: Professor
This file is model for recorded my contacts list*/
let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('contact', contactSchema);