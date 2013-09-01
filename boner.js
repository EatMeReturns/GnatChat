var bone = require('bone.io');

channels = {
	'gnat': {
		outbound: {
			routes: ['login']
		},

		inbound: {
			login: function(data, context) {
				console.log(data);
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
