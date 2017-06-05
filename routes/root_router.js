var express = require("express");
var root = express.Router();

root.get('/', function(req, res) {
  res.render("index", {
    kunst: req.app.get('kunstFile').kunst,
    categorieen: req.app.get('categorieenFile').categorieen

  });
});

module.exports = root;
