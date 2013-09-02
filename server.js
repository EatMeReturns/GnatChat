var director = require('director'),
    static = require('node-static'),
    io = require('socket.io');

var router = new director.http.Router(require('./routes')),
    files = new static.Server('./static');

var server = require('http').createServer(function (req, res) {
	files.serve(req, res, function(e) {
		if(e && e.status == 404) {
			files.serveFile('/index.html', 200, {}, req, res);
		}
	});
}).listen(1337, '127.0.0.1');

io = io.listen(server, {log: false});
io.set('browser client minification', true);
io.set('browser client gzip', true);
require('./boner')(io);

console.log('Server running at http://127.0.0.1:1337/');
