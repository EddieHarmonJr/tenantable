var express = require('express');
var router = express.Router();
var db = require('../db/queries')
var passport = require('../auth/local')
const { loginRequired } = require("../auth/helpers");

router.post('/new', db.registerUser);
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json(req.user);
})
router.get('/logout',loginRequired, db.logoutUser)

module.exports = router;
