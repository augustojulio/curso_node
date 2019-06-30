/* import the server settings */

var app = require('./config/server');

/* parameterize the listening port */
var server = app.listen(8080, function(){
    console.log("Server online");
});

var io = require('socket.io').listen(server);

app.set('io', io);

/* create a connection by websocket */
io.on('connection', function(socket){ //callback of connection object
    console.log('Usuário conectou');

    socket.on('disconnect', function(){
        console.log('Usuário desconectou');
    });

    socket.on('msgParaServidor', function(data){

    	/*dialog*/
    	socket.emit(
    		'msgParaCliente',
    		 { apelido: data.apelido, mensagem: data.mensagem}
    	);

    	socket.broadcast.emit(
    		'msgParaCliente',
    		 { apelido: data.apelido, mensagem: data.mensagem}
    	);

    	/*participants*/
    	if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
	    	socket.emit(
	    		'participantesParaCliente',
	    		 { apelido: data.apelido}
	    	);

	    	socket.broadcast.emit(
	    		'participantesParaCliente',
	    		 { apelido: data.apelido}
	    	);
	    }
    });
});