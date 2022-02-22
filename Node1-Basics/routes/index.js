var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// require means include package
var multer = require('multer');
// will create a folder nme "uploadDir"
var upload = multer({ dest: 'uploadDir' });
// HTTP POST request from http://localhost:3000/upload is received
// "file_up" is the input field name from the HTML form
// selected file will be uploaded into the destination folder
// upload object is from multer package
router.post('/upload', upload.single('file_up'), function(req, res) {
  console.log("This will show up in your terminal not Browser");
  var message = "<br> This will show up in your browser. "
  message += "<br> <h3>Whenever you modify code on the server-side, restart the server"
  res.send(message);
});
module.exports = router;