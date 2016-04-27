var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controler');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/questions', quizController.question);
router.get('/check', quizController.check);

module.exports = router;
