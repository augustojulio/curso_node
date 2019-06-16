module.exports = function(application){

    application.get('/noticias', function(req, res){

        var connection = application.config.dbConnection();
        var noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection,  function(error, result){ //connection.query(<sql>,<func callback>)
            res.render("noticias/noticias", {noticias : result});
        });
    });
};  
    