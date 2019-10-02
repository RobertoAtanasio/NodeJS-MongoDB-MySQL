// let express = require('express');
// let app = express();
// let msg = require('./mod_teste')();		// módulo na raiz './'. O () no final faz com a função seja executada
// let msg2 = require('./mod_teste');

// app.set('view engine', 'ejs');

let app = require('./config/server');

// app.get('/', function(req,res){
// //    res.send("<html><body>Portal de Notícias</body></html>");
// 	res.render('home/index');
// });

// app.get('/formulario_inclusao_noticia', function(req,res){
//     res.render('admin/form_add_noticia');
// });

// app.get('/noticias', function(req,res){
//     res.render('noticias/noticias');
// });

//----------- com a inclusão do consign, não é preciso definir as rotas da forma abaixo:
// let rotaHome = require('./app/routes/home')(app);
// let rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);
// let rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
    console.log("Servidor ON...");
    // console.log("msg: " + msg);
    // console.log("msg2: " + msg2());
});