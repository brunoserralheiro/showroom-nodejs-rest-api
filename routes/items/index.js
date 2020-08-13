var itemsRouter = require('express').Router();


itemsRouter.get('/items', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
itemsRouter.get('/items/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('index', { title: id });
});
itemsRouter.post('/items', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = itemsRouter;
