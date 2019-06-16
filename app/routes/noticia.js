module.exports = function(app){

    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.getNoticia(connection,  function(error, result){ //connection.query(<sql>,<func callback>)
            res.render("noticias/noticia", {noticia : result});
        });    
    });
};  
    
