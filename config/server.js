var express = require('express'); //retrieving express lib
var consign = require('consign'); //retrieving consign lib

var app = express(); //express module returns a function, here we are executing this function
app.set('view engine', 'ejs'); //here we say that ejs will take care of our views
app.set('views', './app/views'); //here we say "where are the views"


consign()               //scan routes folder and include these routes to our server (app)
    .include('app/routes')
    .then('config/dbConnection.js') //in this case, .js extension indicates that dbConnection is the module to be used inside config dir
    .into(app); 

module.exports = app;