/*Modified by: Shila Rani Das(300969886) 30 Mar 2019 
This file for routing login/register api*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
