var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// http://localhost:3000/form
router.get('/form', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'form.html'));
});

router.post('/form', function(req, res) {
  res.json({
    first: req.body.first,
    last: req.body.last
  });
});

// http://localhost:3000/madlibs
router.get('/madlibs', function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'public', 'madlibs.html'));
});

router.post('/madlibs', function(req, res) {
  res.json({
    clothing: req.body.clothing,
    female1: req.body.female1,
    female2: req.body.female2,
    male1: req.body.male1,
    male2: req.body.male2,
    noun: req.body.noun
  });
});

module.exports = router;
