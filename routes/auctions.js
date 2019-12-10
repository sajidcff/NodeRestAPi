var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auction = require('../models/Auction');

/* GET ALL PRODUCTS */
router.get('/', function(req, res, next) {
  Auction.find(function (err, auctions) {
    if (err) return next(err);
    res.json(auctions);
  });
});

/* GET SINGLE PRODUCT BY ID */
router.get('/:id', function(req, res, next) {
  Auction.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE PRODUCT */
router.post('/', function(req, res, next) {
  console.log(req.body);
  Auction.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* UPDATE PRODUCT */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  Auction.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* DELETE PRODUCT */
router.delete('/:id', function(req, res, next) {
  Auction.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
