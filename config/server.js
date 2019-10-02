let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');

let app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended: true}));

// inclui todas as rotas na aplicação definidas em app/routes
// logo em app.js não é preciso definir a rota da seguinte forma:
// let rotaHome = require('./app/routes/home')(app);

consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.into(app);	

module.exports = app;