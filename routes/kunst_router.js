var express = require("express");
var kunst = express.Router();

kunst.get('/items/:id', function(req, res) {
  var kunstFile = req.app.get('kunstFile');
  var id = req.params.id;
  var teller = 0;
  var item = "";
  while (teller < kunstFile.kunst.length ) {
    if (kunstFile.kunst[teller].id == id) {
      item = kunstFile.kunst[teller];
    }
    teller++;
  }
  if (item !== "") {
    res.render("kunst", {
      item: item
    });
  } else {
    res.render("404", {});
  }
});

module.exports = kunst;
