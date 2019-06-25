/* import the server settings */

var app = require('./config/server');

/* parameterize the listening port */
var server = app.listen(8080, function(){
    console.log("Server online");
});

var io = require('socket.io').listen(server);

/* create a connection by websocket */
io.on('connection', function(socket){ //callback of connection object
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });
});