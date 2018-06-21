var express = require('express');
var router = express.Router();
var db = require('../db/queries')
var passport = require('../auth/local')
const { loginRequired } = require("../auth/helpers");

router.post('/create', db.registerUser);
// router.post("/login", db.loginUser)
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
})
router.get('/getallusers', db.getAllUsers);
router.get('/getalllandlords', db.getAllLandlords);

router.get('/getsingleuser/:username', db.getSingleUser);

// -------------
router.get('/apartments', db.getAllApartments);
router.get('/getallratings', db.getAllRatings);
router.get('/getuserrating/:user_id', db.getUserRating);


// router.get('/getsingleapartment/:apt_name', db.getSingleApartment);
// router.get('/getuserapartment', db.getUserApartment);
// ---------------


router.get('/logout',loginRequired, db.logoutUser)

module.exports = router;
