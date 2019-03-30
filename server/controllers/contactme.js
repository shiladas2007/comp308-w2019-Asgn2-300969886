/*Created by: Shila Rani Das(300969886) 30 Mar 2019  
This file is controlling the receiving message  from others and viewing message*/
let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

// create a reference to the db schema
let contactmeModel = require('../models/contactme');

module.exports.displayContactmeList = (req, res, next) =>{
    contactmeModel.find((err, contactmeList) => {
        if(err) {
            return console.error(err);
        }
        else {
           res.json({success: true, msg: 'Contactme List Displayed Successfully', contactmeList: contactmeList, user: req.user});
        }
    });
}


module.exports.processAddPage = (req, res, next) => {

    let newContactme = contactmeModel({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email,
        "message": req.body.message
    });

    contactmeModel.create(newContactme, (err, contactmeModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.json({success: true, msg: 'Successfully recorded your message'});
        }
    });
}

