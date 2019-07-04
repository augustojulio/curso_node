/* import mongodb */
var mongo = require("mongodb");

var connMongoDB = function(){
	console.log('entrou func conexao');
	var db = mongo.Db(
		'got',
		new mongo.Server(
			'localhost', //string containing the server address where the DB is located
			27017, //connection port
			{}
		),
		{}
	);

	return db;

}

module.exports = function(){
	return connMongoDB;
}