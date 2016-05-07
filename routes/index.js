var express = require('express');
var router = express.Router();
var _ = require("lodash");
var debug = require("debug")("EnvChart:index");

var config = require("../config.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Environment Monitor' , data: result});
});

router.post('/' + config.apikey, function(req, res, next) {
  data = req.body.result;
  data.time = Date.now();
  result.unshift(data);
  result = _.take(result, 50);
  res.json({"status": "success"}).end();
});

var result = [];

module.exports = router;
