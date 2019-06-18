module.exports = function(application){

    application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticias(function(error, result){ //connection.query(<sql>,<func callback>)
            res.render("noticias/noticias", {noticias : result});
        });
    });
};  
    