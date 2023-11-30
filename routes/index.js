var express = require('express');
var router = express.Router();
const indexController = require("../controller/indexController")
/* GET home page. */
router.get('/', indexController.home);
router.get('/detalle/:id', indexController.detalle);


module.exports = router;
