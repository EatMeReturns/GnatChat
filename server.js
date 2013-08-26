var http = require('http');

var User = require('./models/user');
var Room = require('./models/room');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Baccano\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');