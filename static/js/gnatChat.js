var socket = io.connect();

bone.set('io.options', {socket: socket});
bone.set('hostname', 'localhost:1337');

var Gnat = bone.io('gnat', {
	outbound: {
		routes: ['login', 'getRooms']
	},

	inbound: {
		login: function(data, context) {
			bone.router.navigate('rooms', true);
		},

		room: function(data, context) {
			RoomList.addRoom(data);
		}
	}
});

bone.set('templates', {
	layout: function() {
		return '<div class="logo">GnatChat</div><div class="content"></div>';
	},

	login: function() {
		return '<div class="login"><p>Nickname:</p><input id="username" type="text"><input type="button" value="Ok"></div>';
	},

	roomList: function() {
		return '<ul class="rooms"></ul>';
	},
});

bone.router({
	routes: {
		'login': 'login',
		'rooms': 'rooms'
	},

	login: function() {
		bone.mount('.container', 'layout');
		bone.mount('.content', 'login');
	},

	rooms: function() {
		bone.mount('.container', 'layout');
		bone.mount('.content', 'roomList');
		Gnat.getRooms();
	}
});

var Login = bone.view('.login', {
	events: {
		'click input[type="button"]': 'login'
	},

	login: function() {
		Gnat.login($('#username').val());
	}
});

var RoomList = bone.view('.rooms', {
	addRoom: function(room) {
		var $el = $('<li class="room">' + room + '</li>');
		this.$el.append($el);
	}
});

var Room = bone.view('.room', {
	//
});

bone.router.start({pushState: true});
$(function() {
	bone.router.navigate('login', true);
});
