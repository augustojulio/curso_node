var express = require('express'); //retrieving express lib
var consign = require('consign'); //retrieving consign lib
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); //express module returns a function, here we are executing this function
app.set('view engine', 'ejs'); //here we say that ejs will take care of our views
app.set('views', './app/views'); //here we say "where are the views"

app.use(bodyParser.urlencoded({extended: true})) //the body-parser is a middleware
app.use(expressValidator());
app.use(express.static('./app/public')); //static acts as a middleware to identify assets

consign()               
    .include('app/routes') //scan routes folder and include these routes to our server (app)
    .then('config/dbConnection.js') //in this case, .js extension indicates that dbConnection is the module to be used inside config dir
    .then('app/models')
    .then('app/controllers')
    .into(app); 

module.exports = app;