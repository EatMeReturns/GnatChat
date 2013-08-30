var bone = require('bone.io');

var routes = require('./routes');

var router = new (require('director')).http.Router(routes.director),
    files = new (require('node-static')).Server('./static');

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

var io = require('socket.io').listen(server);

bone.set('io.options', {
	server: io
});

bone.io('gnat', routes.bone);

console.log('Server running at http://127.0.0.1:1337/');