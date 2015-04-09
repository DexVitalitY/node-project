var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: 8001
});

//add route
server.route({
	method: 'GET',
	path:'/hello',
	handler: function(request, reply) {
		reply('hello world');
	}
});

server.start();