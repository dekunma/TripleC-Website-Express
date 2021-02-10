var express = require('express');
var router = express.Router();

/* GET sponsor page. */
router.get('/', function(req, res, next) {
  res.render('Sponsor');
});

module.exports = router;
