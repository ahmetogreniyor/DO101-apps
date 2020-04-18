var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello mars!\n');
})

app.get('/kars', function (req, res) {
  res.send('Hello kars!\n');
})

app.get('/lars', function (req, res) {
  res.send('Hello lars!\n');
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

