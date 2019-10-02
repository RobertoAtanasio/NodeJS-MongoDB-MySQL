module.exports = function(application) {
	application.get('/formulario_inclusao_noticia', function(req,res){
	    res.render('admin/form_add_noticia');
	});	

	application.post('/noticias/salvar', function(req,res){
		// para funcionar é preciso ter na aplicação o módulo body parse
		let noticia = req.body;

		// res.send(noticia);

		let connection = application.config.dbConnection();
		let noticiasModel = application.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, connection, function(error, result) {
			res.redirect('/noticias');
		});

	});	
}
