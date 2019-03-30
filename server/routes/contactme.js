/*Created by :Shila Rani Das(300969886) 30 Mar 2019 
This file for routing saving message and viewing message sending by others api*/

let express = require('express');
let router = express.Router();
let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactmeController = require('../controllers/contactme');

/* GET Contact List page - READ Operation */
router.get('/', passport.authenticate('jwt', {session: false}),  contactmeController.displayContactmeList);


/* POST Route for processing the Add page */
router.post('/add', contactmeController.processAddPage);


module.exports = router;