var fs = require('fs'),
    http = require('http'),
    ejs = require('ejs'),
    static = require('node-static'),
    director = require('director');

var User = require('./models/user'),
    Room = require('./models/room');

var router = new director.http.Router({
	'/': {
		get: function() {
			var res = this.res;
			res.writeHead(200, {'Content-type': 'text/html'});
			fs.readFile('./views/index.ejs', 'utf8', function(e, view) {
				res.end(ejs.render(view));
			});	
		}
	}
});

var files = new static.Server('./static');

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