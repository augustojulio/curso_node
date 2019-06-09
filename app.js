var express = require('express'); //retrieving express lib
var app = express(); //express module returns a function, here we are executing this function

app.get('/', function(req, res){
    res.send("<html><body>Portal de Notícias</body></html>")
});

app.get('/tecnologia', function(req, res){
    res.send("<html><body>Notícias de tecnologia</body></html>")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});