let http = require('http');		// incorpora a biblioteca http

/*let server = http.createServer(function(req,res){
    res.end("<html><body>Portal de Notícias</body></html>");
});*/

let server = http.createServer(function(req,res){
    let categoria = req.url;			// recupearndo uma requisição	
    if(categoria == '/tecnologia'){
        res.end("<html><body>Notícias de Tecnologia</body></html>");
    }else if(categoria == '/moda'){
        res.end("<html><body>Notícias de Moda</body></html>");
    }else if(categoria == '/beleza'){
        res.end("<html><body>Notícias de Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de Notícias</body></html>");
    }
});

server.listen(3000);