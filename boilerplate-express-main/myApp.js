require('dotenv').config();
var express = require('express');
var app = express();

// Serve static assets from /public
app.use('/public', express.static(__dirname + '/public'));

// Serve HTML file at root path
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON at /json route
app.get('/json', function(req, res) {
  const messageStyle = process.env.MESSAGE_STYLE;  // Must be inside the route
  let message = 'Hello json';

  if (messageStyle === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

module.exports = app;
