var express = require('express'); //retrieving express lib
var app = express(); //express module returns a function, here we are executing this function

app.set('view engine', 'ejs'); //here we say that ejs will take care of our views

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia") //here I can hide the file extension, because ejs can understand it
});

app.get('/', function(req, res){
    res.send("<html><body>Portal de Notícias</body></html>")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});