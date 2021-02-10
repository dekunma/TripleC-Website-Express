var express = require('express');
var router = express.Router();

/* GET project page. */
router.get('/:id', function(req, res, next) {
  res.render('project');
});

module.exports = router;
