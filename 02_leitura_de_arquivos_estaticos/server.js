var http = require('http');

/*
    Arquivos estáticos são todos aqueles que não são criados dinamicamente
    como imagens, icones, videos, pdfs, etc.

    IMPORTANTE: Esta não é uma boa opção para criação do sistema em si
    mas demonstra como ler arquivos estáticos do disco.
*/

http.createServer(function handler(request, response){
    var fs = require('fs');

    fs.readFile('index.html', function(err, data){
        response.writeHead(200, {'Content-Type':'text/html'});
        response.end(data);
    });


}).listen(3000, '127.0.0.1');


console.log('Server running at http://127.0.0.1:3000');