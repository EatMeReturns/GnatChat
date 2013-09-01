var bone = require('bone.io');

channels = {
	'gnat': {
		outbound: {
			routes: []
		},

		inbound: {

		}
	}
}

module.exports = function(server) {
	bone.set('io.options', {server: server});
	for(channel in channels) {
		bone.io(channel, channels[channel]);
	}
};
