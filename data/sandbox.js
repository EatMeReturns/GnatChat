var db = require('./db');

db.serialize(function() {
	db.run('CREATE TABLE users (username TEXT, password TEXT)', function() {
		console.log('Created users table');
	});
});

db.close();
