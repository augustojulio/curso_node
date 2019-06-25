/* import the server settings */

var app = require('./config/server');

/* parameterize the listening port */
var server = app.listen(8080, function(){
    console.log("Server online");
});

require('socket.io').listen(server);