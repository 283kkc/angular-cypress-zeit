var express = require("express");
var auth = require('./auth');
var app = express();

app.use(auth);
app.use(express.static(__dirname + '/dist/angular-tour-of-heroes'));
var server = app.listen(3000, function(){
  console.log("Started. Port:" + server.address().port);
});
