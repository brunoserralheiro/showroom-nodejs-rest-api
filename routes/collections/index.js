const collectionsRouter = require('express').Router();
const data = require('../../data.json');


// collectionsRouter.get('/collections', function(req, res, next) {
    
//   });
  collectionsRouter.get('/:id', async function(req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>collections <<<<<<<<<<<<<<<<<');
    const id = req.params.id;
    console.log(id);
    const collection = await data.collections.find(collection => collection.id === id);
    res.status(200).json({ collection });
    // console.log(JSON.stringify(collection));
  });
  collectionsRouter.get('/', function(req, res, next) {
    console.log('>>>>>>>>>>>>>>>>>>>>>>>>GET collections  OK<<<<<<<<<<<<<<<<<');
    const collection = data.collections;
    console.log(JSON.stringify(collection));
    res.status(200).json({ collection });
  });

  collectionsRouter.post('/', function(req, res, next) {
    res.send('collection', { title: id });
  });

module.exports = collectionsRouter;
