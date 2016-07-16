var express = require('express');

var app = express();

function getRandomNumber() {
  return Math.floor(Math.random() * (99999 - 2)) + 2;
};

function getMultiple() {
  return Math.floor(Math.random() * (10 - 2)) + 2;
}

app.get('/random', function(req, res) {
  res.json({
    1: getRandomNumber() * getMultiple(),
    2: getRandomNumber(),
    3: getMultiple()
  });
});

app.listen(3000);
