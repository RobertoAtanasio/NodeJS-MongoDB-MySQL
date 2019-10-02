module.exports = function(application){
    application.get('/noticia', function(req,res){

        let connection = application.config.dbConnection();
        let noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticia(connection, function(error, result){
        	res.render('noticias/noticia', {noticia: result});
        });

        // connection.query("SELECT * FROM noticias where id_noticias = 2", function(error, result){
        // 	res.render('noticias/noticia', {noticia: result});
        // });
    });
}