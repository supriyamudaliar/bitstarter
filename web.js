var express = require('express');
var buffer;
var file = require("fs");
buffer=file.readFileSync('index.html','utf8');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
