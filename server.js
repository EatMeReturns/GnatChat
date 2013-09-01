var http = require('http'),
    director = require('director'),
    static = require('node-static'),
    bone = require('bone.io'),
    redis = require('redis');

var routes = require('./routes'),
    router = new director.http.Router(routes.director),
    files = new static.Server('./static'),
    db = require('./db');

var server = http.createServer(function (req, res) {
	router.dispatch(req, res, function(e) {
		if(e) {
			return files.serve(req, res, function() {
				res.writeHead(404);
				res.end('404');
			});
		}
	});
}).listen(1337, '127.0.0.1');

var io = require('socket.io').listen(server, {log: false});

bone.set('io.options', {server: io});
bone.io('gnat', routes.bone);

console.log('Server running at http://127.0.0.1:1337/');
