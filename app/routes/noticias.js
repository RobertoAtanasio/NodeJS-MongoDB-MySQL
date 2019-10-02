//let dbConnection = require('../../config/dbConnection');

// Como o módulo server.ja jogou o módulo de conexão dentro do app no consign
// consign()
//     .include('app/routes')
//     .then('config/dbConnection.js')
//     .into(app); 

module.exports = function(application){
    application.get('/noticias', function(req,res){

    	// let mysql = require('mysql');

     //    var connection = mysql.createConnection({
     //        host: 'localhost',
     //        user: 'root',
     //        password: 'root',
     //        database: 'portal_noticias'
     //    });

     
     	// let connection = dbConnection();

        let connection = application.config.dbConnection();
        let noticiasModel = application.app.models.noticiasModel;

        noticiasModel.getNoticias(connection, function(error, result){
            res.render('noticias/noticias', {noticias: result});
            // res.send(result);
        });

        // connection.query("SELECT * FROM noticias", function(error, result){
        // 	res.render('noticias/noticias', {noticias: result});
        //     // res.send(result);
        // });
    

        // res.render('noticias/noticias');
    });
}