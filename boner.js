var bone = require('bone.io'),
    redis = require('redis').createClient();

channels = {
	'gnat': {
		outbound: {
			routes: ['login']
		},

		inbound: {
			login: function(data, context) {
				console.log(data);
				redis.set(data, 'awesome');
				redis.expire(data, 10);
			}
		}
	}
}

module.exports = function(server) {
	bone.set('io.options', {server: server});
	for(channel in channels) {
		bone.io(channel, channels[channel]);
	}
};
