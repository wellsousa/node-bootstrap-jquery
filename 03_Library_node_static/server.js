var static = require('node-static');

var http = require('http');

/*
    O primeiro parametro informa o tipo de paginas que serão direcionadas e tratadas.
    O '.' indica que são todos os tipos de urls que serao direcionados para la.

    'cache' indica o numero maximo de bytes que serão guardados nessa requisição em cacho
    'headers' informa que tipo de conteudo é esperado nessa requisção. Normalmente é 'html' ou 'plain'
*/
var fileServer = new static.Server('.', {cache: 7000,
                                        headers :{'Content-Type':'text/html'}
                                    });

http.createServer(function handler(request, response){
                                    fileServer.serve(request, response, function(error, resp){
                                        if(error){
                                            console.log("Erro!");
                                        }
                                    });
                                    
                                    
                          }).listen(3000, '127.0.0.1');
                                    


console.log('Server running at http://127.0.0.1:3000');
