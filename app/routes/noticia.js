module.exports = function(app){

    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();

        connection.query('select * from noticias where id_noticia = 1', function(error, result){ //connection.query(<sql>,<func callback>)
            res.render("noticias/noticia", {noticia : result});
        });

    });
};  
    