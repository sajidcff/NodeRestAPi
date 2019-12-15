var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Auction = require('../models/Auction');
var Cars = require('../models/Cars');
var Carimgs = require('../models/Carimgs');



/* GET SINGLE CAR DATA BY ID */
router.get('/cars', function(req, res, next) {
  Cars.findOne({car_id:req.query.car_id}, function (err, post) {
    if (err) return next(err);
    res.send(post);
  });
});

/* GET SINGLE CAR IMAGES BY ID */
router.get('/carimgs', function(req, res, next) {
  Carimgs.findOne({car_id:req.query.car_id}, function (err, post) {
    if (err) return next(err);
    res.send(post);
  });
});

// /* GET ALL CARS IMAGES*/
// router.get('/carimgs', function(req, res, next) {
//   Carimgs.find(function (err, carimg) {
//     if (err) return next(err);
//     res.json(carimg);
//   });
// });

/* SAVE CARS IMAGES */
router.post('/carimgs', function(req, res, next) {
  console.log(req.body);
  Carimgs.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

// /* GET ALL CARS */
// router.get('/cars', function(req, res, next) {
//   Cars.find(function (err, cars) {
//     if (err) return next(err);
//     res.json(cars);
//   });
// });

/* SAVE CARS */
router.post('/cars', function(req, res, next) {
  console.log(req.body);
  Cars.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* GET ALL AUCTIONS */
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
