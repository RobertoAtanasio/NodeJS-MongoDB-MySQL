module.exports = function () {

	this.getNoticias = function(connection, callback) {
		connection.query("SELECT * FROM noticias", callback);
	};

	this.getNoticia = function(connection, callback){
        connection.query('SELECT * FROM noticias WHERE id_noticias = 2', callback);
    }

    this.salvarNoticia = function(noticia, connection, callback) {
    	// obs.: o json deve ter como rótulo das variáveis o mesmo nome que as colunas da tabela
    	connection.query('insert into noticias set ?', noticia, callback);
    }

	return this;
}