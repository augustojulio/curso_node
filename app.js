var express = require('express'); //retrieving express lib
var app = express(); //express module returns a function, here we are executing this function

app.set('view engine', 'ejs'); //here we say that ejs will take care of our views

app.get('/', function(req, res){
    res.render("home/index"); //here I can hide the file extension, because ejs can understand it
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res){
    res.render("noticias/noticias");
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express");
});