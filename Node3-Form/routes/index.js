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
    adjective1: req.body.adjective1,
    adjective2: req.body.adjective2,
    adjective3: req.body.adjective3,
    adverb: req.body.adverb,
    celeb1: req.body.celeb1,
    celeb2: req.body.celeb2,
    person: req.body.person,
    noun1: req.body.noun1,
    noun2: req.body.noun2,
    supadjective: req.body.supadjective
  });
});

module.exports = router;
