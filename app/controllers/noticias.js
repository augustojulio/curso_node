module.exports.noticias = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){ //connection.query(<sql>,<func callback>)
        res.render("noticias/noticias", {noticias : result});
    });
}

module.exports.noticia = function(application, req, res){
    var connection = application.config.dbConnection();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){ //connection.query(<sql>,<func callback>)
        res.render("noticias/noticia", {noticia : result});
    }); 
}