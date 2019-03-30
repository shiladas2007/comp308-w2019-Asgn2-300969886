let express = require('express');
let router = express.Router();

let jwt = require('jsonwebtoken');

let passport = require('passport');

let contactmeController = require('../controllers/contactme');

/*function requireAuth(req, res, next) {
    // check if the user is logged in
    if(!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    next();
}*/

/* GET Contact List page - READ Operation */
//router.get('/', passport.authenticate('jwt', {session: false}), contactmeController.displayContactmeList);
router.get('/',  contactmeController.displayContactmeList);


/* POST Route for processing the Add page */
router.post('/add', contactmeController.processAddPage);


module.exports = router;