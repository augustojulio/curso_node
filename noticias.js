var http = require('http'); //importing http lib

//upping a server
var server = http.createServer( function(req, res){
	res.end("<html><body>Portal de notícias</body></html>");
});

server.listen(3000);