var express = require('express');

var app = express();

var randomNumber = Math.random() * (99999 - 2) + 2;

var ramdomMultiple = Math.floor(Math.random() * (10 - 2)) + 2;

app.get('/random', function(req, res) {
  res.json({
    1: randomNumber * ramdomMultiple,
    2: randomNumber,
    3: ramdomMultiple
  });
});

app.listen(3000);
