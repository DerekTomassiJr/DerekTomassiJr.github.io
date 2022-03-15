var express = require('express');
var router = express.Router();

var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/session', function(req, res) {
  // HTTP request has a session object
  var sess = req.session;
  // create a javascript variable views
  if (sess.views) {
  sess.views++;
  } else {
  // initialize the new variable to 1
  sess.views = 1;
  }
  // views/session.hbs
  res.json({
  views: sess.views,
  dates: moment().format('MMMM Do YYYY, h:mm:ss a')
})});

module.exports = router;
