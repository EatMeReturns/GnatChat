var socket = io.connect();

bone.set('io.options', {
	socket: socket
});

bone.set('hostname', 'localhost:1337');

var Gnat = bone.io('gnat', {
	outbound: {
		routes: ['login']
	},

	inbound: {
		login: function(data, context) {

		}
	}
});

Gnat.login('tie372');
