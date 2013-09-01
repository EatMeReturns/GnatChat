var sqlite = require('sqlite3'),
    db = module.exports = sqlite.cached.Database('./data/GnatChat');
