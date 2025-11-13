var express = require('express');
var app = express();

// Serve static assets from the /public directory
app.use('/public', express.static(__dirname + '/public'));

// Serve the HTML file at root path
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

module.exports = app;
