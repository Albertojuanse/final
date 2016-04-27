var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/author', function(req, res) {
  res.render('author', { title: 'Autor' });
});

module.exports = router;
