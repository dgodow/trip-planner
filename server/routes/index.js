const router = require('express').Router();

exports.index = function(req, res){
  res.render('../views/index');
};

exports.error = function(req, res) {
  res.render('../views/error');
};

module.exports = router;
