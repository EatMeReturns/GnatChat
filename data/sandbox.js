var sqlite = require('sqlite3');

var db = sqlite.cached.Database('./data/GnatChat');

db.serialize(function() {
	db.run('CREATE TABLE users (username TEXT, password TEXT)', function() {
		console.log('Created users table');
	});
});

db.close();
