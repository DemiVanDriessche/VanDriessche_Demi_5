
/*werkt niet zoekbalk*/
/*
input.onkeyup = function myFunction() {
  var filter, table, tr, td, i;
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  h2 = document.getElementsByClassName("balk");
  for (i = 0; i < kader.length; i++) {
    if (h2 [i].id.toUpperCase().indexOf(filter)> -1){
        h2 [i].style.display = "";
      } else {
        h2 [i].style.display = "none";
      }
    }
  }
*/

var express = require("express");
var path = require("path");
var app = express();

app.set('kunstFile', require('./config/kunst.json'));
app.set('categorieenFile', require('./config/categorieen.json'));

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set('port', (process.env.PORT || 5000));
app.use(express.static('public'))

app.use(require("./routes/root_router"));
app.use(require("./routes/kunst_router"));
app.use(require("./routes/categorieen_router"));

app.listen(app.get('port'), function() {
  console.log('Node luistert op poort', app.get('port'));
});
