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

