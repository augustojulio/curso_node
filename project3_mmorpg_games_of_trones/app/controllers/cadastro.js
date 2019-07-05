module.exports.cadastro = function(application, req, res){
	res.render('cadastro', { validacao: {}, dadosForm: {}});
}


module.exports.cadastrar = function(application, req, res){

	var dadosForm = req.body;

	req.assert('nome', 'Nome não pode ser vazio').notEmpty();
	req.assert('usuario', 'Usuário não deve ser vazio').notEmpty();
	req.assert('senha', 'Senha não deve ser vazia').notEmpty();
	req.assert('casa', 'Casa não deve ser vazia').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.render('cadastro', { validacao: erros, dadosForm: dadosForm});
		return;
	}

	var connection = application.config.dbConnection;

	var UsuariosDAO = new application.app.models.UsuariosDAO(connection);
	var JogoDAO = new application.app.models.JogoDAO(connection);

	UsuariosDAO.inserirUsuario(dadosForm);
	JogoDAO.gerarParametros(dadosForm.usuario);

	res.send('Podemos cadastrar');

}