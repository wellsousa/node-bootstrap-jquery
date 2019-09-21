var http = require("http"),
    onRequest = function(request, response){
        console.log("Uma requisição chegou.");

        /*
            CODIGOS HTTP

            200 - ok
            404 - pagina não encontrada
            500 - erro no servidor
         */
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<h1>Hello World</h1>");
        response.end();
    };

    http.createServer(onRequest).listen(3000);
    console.log("servidor iniciado com sucesso.");

   