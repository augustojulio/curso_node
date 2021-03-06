var express = require('express'),
	bodyParser = require('body-parser'),
	multiparty = require('connect-multiparty'),
	mongodb = require('mongodb'),
	objectId = require('mongodb').ObjectId,
	fs = require('fs');

var app = express();

//body-parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(multiparty());

var port = 8080;

app.listen(port);

var db = new mongodb.Db(
	'instagram',
	new mongodb.Server('localhost', 27017, {}),
	{}
);

console.log('HTTP server is listening port' + port);

app.get('/', function(req, res){

	res.send({ msg: 'olá'});

});

//POST (create documents)
app.post('/api', function(req, res){

	res.setHeader("Access-Control-Allow-Origin", "*");

	var dados = req.body;

	res.send(dados);

	var path_origem = req.files.arquivo.path;
	var path_destino = './uploads/' + req.files.arquivo.path.originalFilename;

	fs.rename(path_origem, path_destino, function(err){
		if(err){
			res.status(500).json({ error: err});
			return;
		}


	// db.open(function(err, mongoclient){
	// 	mongoclient.collection('postagens', function(err, collection){
	// 		collection.insert(dados, function(err, records){
	// 			if(err){
	// 				res.json({'status' : 'erro'});
	// 			} else {
	// 				res.json({'status' : 'inclusao realizada com sucesso'});
	// 			}
	// 			mongoclient.close();
	// 		});
	// 	});

	// });
	
	});

});


//GET (read documents)
app.get('/api', function(req, res){

	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find().toArray(function(err, results){
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
				mongoclient.close();
			});
		});

	});
});


//GET (read documents by ID)
app.get('/api/:id', function(req, res){

	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.find(objectId(req.params.id)).toArray(function(err, results){
				if(err){
					res.json(err);
				} else {
					res.json(results);
				}
				mongoclient.close();
			});
		});

	});
});

//PUT (update documents by ID)
app.put('/api/:id', function(req, res){

	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.update(
				{ _id : objectId(req.params.id)},
				{ $set : { titulo : req.body.titulo}},
				{},
				function(err, records){
					if(err){
						res.json(err);
					} else {
						res.json(records);
					}

					mongoclient.close();	
				}
			);
		});

	});
});

//DELETE (remove documents by ID)
app.delete('/api/:id', function(req, res){

	db.open(function(err, mongoclient){
		mongoclient.collection('postagens', function(err, collection){
			collection.remove({ _id : objectId(req.params.id)}, function(err, records){
				if(err){
					res.json(err);
				} else {
					res.json(records);
				}
				mongoclient.close();
			});
			
		});

	});
});