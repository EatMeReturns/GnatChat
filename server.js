var http = require('http'),
    static = require('node-static'),
    director = require('director');

var router = new director.http.Router(require('./routes')),
    files = new static.Server('./static');

http.createServer(function (req, res) {
	router.dispatch(req, res, function(e) {
		if(e) {
			return files.serve(req, res, function() {
				res.writeHead(404);
				res.end('404');
			});
		}
	});
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');