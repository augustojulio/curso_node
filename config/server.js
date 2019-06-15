var express = require('express'); //retrieving express lib
var consign = require('consign'); //retrieving consign lib

var app = express(); //express module returns a function, here we are executing this function
app.set('view engine', 'ejs'); //here we say that ejs will take care of our views
app.set('views', './app/views'); //here we say "where are the views"

consign().include('app/routes').into(app); //scan routes folder and include these routes to our server (app)

module.exports = app;