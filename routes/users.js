var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/api/v2/users', function(req, res, next) {
  res.send('list users');
});
router.get('/api/v2/user/:id', function(req, res, next) {
  res.send('getting user', id);
});
router.post('/api/v2/user', function(req, res, next) {
  res.send('post user');
});

module.exports = router;
