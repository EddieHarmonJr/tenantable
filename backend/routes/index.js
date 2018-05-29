var express = require('express');
var router = express.Router();
var exportedObject = require('../db/index.js');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// console.log(exportedObject);
router.get('/tenants/:username', exportedObject.getAllTenants);

module.exports = router;
