const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  if(request.method === 'POST' && request.url == "/echo"){
    // response.statusCode = 200;
    // response.setHeader("Content-Type", "text/plain");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("hi w...\n");
  }else{
    response.statusCode = 404;
    response.end();
  }
})

server.listen(8001);
console.log("server run is http://localhost:8001")