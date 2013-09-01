var director = require('director'),
    static = require('node-static'),
    redis = require('redis'),
    io = require('socket.io');

var router = new director.http.Router(require('./routes')),
    files = new static.Server('./static');

var server = require('http').createServer(function (req, res) {
	router.dispatch(req, res, function(e) {
		if(e) {
			return files.serve(req, res, function() {
				res.writeHead(404);
				res.end('404');
			});
		}
	});
}).listen(1337, '127.0.0.1');

io = io.listen(server, {log: false});
require('./boner')(io);

console.log('Server running at http://127.0.0.1:1337/');
