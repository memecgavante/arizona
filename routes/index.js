var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/error', function(req, res, next) {
  res.render('error', {error: {
    stack: 'node',
    status: '404',
    message: 'testing how to create a route'
  }})
})

module.exports = router;
