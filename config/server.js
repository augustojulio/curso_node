var express = require('express'); //retrieving express lib
var app = express(); //express module returns a function, here we are executing this function
app.set('view engine', 'ejs'); //here we say that ejs will take care of our views
app.set('views', './app/views'); //here we say "where are the views"

module.exports = app;