var fs = require('fs'),
    ejs = require('ejs'),
    bone = require('bone.io');

module.exports.director = {
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

module.exports.bone = {
	outbound: {
		routes: []
	},
	
	inbound: {
		
	}
};