let mysql = require('mysql');

let connMySQL = function(){
	console.log('Conexão com o banco de dados estabelecida.');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

module.exports = function(){
	// dessa forma será returnada a função e não a execução da mesma. Quando for necessárioa a conexão
	// o módulo correte fara a execução da função.
	console.log('O autoload carregou o módulo de conexão com o banco de dados.');
    return connMySQL;
}

/*

// da forma abaixo, toda vez que se executar o autoload, será feita uma conexão com o BD.

module.exports = function(){
	console.log('Conexão com o banco de dados estabelecida.');
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'portal_noticias'
    });
}

*/