var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({
<<<<<<< HEAD
	host: '0.0.0.0',
	port: 8080,
  routes: {cors: true}
});

var plugins = [{ register: require('./routes/quotes.js') }];

server.register(plugins, function (err) {
  if (err) { throw err; }

  server.start(function () {
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});

//add route
// server.route({
// 	method: 'GET',
// 	path:'/',
// 	handler: function(request, reply) {
// 		var text = {name: "harry", age: "awesome"};
//     reply(text);
// 	}
// });
=======
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
>>>>>>> 693d048e8da1d67ac16cb3cdc8bf71bebdb44440

server.start();