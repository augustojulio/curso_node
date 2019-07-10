var express = require('express'),
	bodyParser = require('body-parser'),
	mongodb = require('mongodb');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = 8080;

app.listen(port);

console.log('HTTP server is listenning port' + port);