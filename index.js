var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

var port = process.env.PORT || 8000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
  console.log('listening on *:' + port);
});
