/* import express framework module */
var express = require('express');

/* import consign module */ 
var consign = require('consign');

/* import body-parser module */
var bodyParser = require('body-parser');

/* import express-validator module */
var expressValidator = require('express-validator');

/* start the express object */
var app = express();

/* set the variables 'view enginge' and 'views' to express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configure the express.static middleware */
app.use(express.static('./app/public'));

/* configure the body-parser middleware */
app.use(bodyParser.urlencoded({extended : true}));

/* configure the express-validator middleware */
//app.use(expressValidator());

/* performs the autoload of routes, models and controllers to the app object */
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/* export app object */
module.exports = app;