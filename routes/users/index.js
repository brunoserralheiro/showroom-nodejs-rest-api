var express = require('express');
var usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/users', function(req, res, next) {
  res.send('list users');
});
usersRouter.get('/users/:id', function(req, res, next) {
  res.send('getting user', id);
});
usersRouter.post('/users', function(req, res, next) {
  res.send('post user');
});

module.exports = usersRouter;
