const express = require ('express');
const router = express.Router();
const Nft = require('../models/nft');

// get a list of ninjas from the db
router.get('/:id', function(req, res, next){
    Nft.findOne({key: req.params.id}).then(function(item){
        delete item._id;
        res.send(item);
    }).catch(next);
});

// add a new ninja to the db
router.post('/', function(req, res, next){
    Nft.create(req.body).then(function(item){
        res.send(item);
    }).catch(next);
});

module.exports = router;
