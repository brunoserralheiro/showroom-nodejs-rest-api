var itemsRouter = require('express').Router();


itemsRouter.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
itemsRouter.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('index', { title: id });
});
itemsRouter.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = itemsRouter;
