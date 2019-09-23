var static = require('node-static');

var http = require('http');

var fileServer = new static.Server('.', {
                                            cache: 7000,
                                            headers: {"Content-Type":"text/html"}
                                        });

http.createServer(function handler(request, response){
                                fileServer.serve(request, response, function(error, resp){
                                    if(error){
                                        console.log("an error has ocurred");
                                    }
                                });
}).listen(3000, '127.0.0.1');

