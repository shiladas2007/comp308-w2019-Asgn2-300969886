/*Created by: Shila Rani Das(300969886) 30 Mar 2019 
This file is model for recorded message from others*/

let mongoose = require('mongoose');

// create a model class
let contactmeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    contactNumber: String,
    email: String,
    message: String
},
{
    collection: "contactme"
});

module.exports = mongoose.model('contactme', contactmeSchema);

