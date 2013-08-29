var fs = require('fs'),
    ejs = require('ejs');

module.exports = {
	'/': {
		get: function() {
			var res = this.res;
			res.writeHead(200, {'Content-type': 'text/html'});
			fs.readFile('./views/index.ejs', 'utf8', function(e, view) {
				res.end(ejs.render(view));
			});	
		}
	}
};