var express = require('express');
var router = express.Router();


router.get('/api/v2/items', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/v2/item/:id', function(req, res, next) {
  const id = req.params.id;
  res.render('index', { title: id });
});
router.post('/api/v2/item', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
