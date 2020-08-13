const collectionsRouter = require('express').Router();
const data = require('../../data.json');


// collectionsRouter.get('/collections', function(req, res, next) {
    
//   });
  collectionsRouter.get('/:id', function(req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>collections <<<<<<<<<<<<<<<<<');
    const id = req.params.id;
    console.log(id);
    const collection = data.collections.find(col => col.id === id);
    console.log(JSON.stringify(collection));
    res.status(200).json({ collection });
  });
  collectionsRouter.get('/', function(req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>GET collections <<<<<<<<<<<<<<<<<');
    const collection = data.collections;
    console.log(JSON.stringify(collection));
    res.status(200).json({ collection });
  });

  collectionsRouter.post('/', function(req, res, next) {
    res.send('collection', { title: id });
  });

module.exports = collectionsRouter;
