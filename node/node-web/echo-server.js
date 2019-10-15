const http = require('http');
const server = http.createServer();

server.on('request', (request, response) => {
  if(request.method === 'POST' && request.url == "/echo"){
    // response.statusCode = 200;
    // response.setHeader("Content-Type", "text/plain");

    let body = [];
    request.on('data', chunk =>{
      body.push(chunk);
    })
    .on('end', () => {
      response.writeHead(200, {"Content-Type": "text/plain"});
      body = Buffer.concat(body).toString();
      response.end(body);
    })

  }else if(request.method === 'POST' && request.url == "/date"){
    let body = [];
    request.on('data', chunk =>{
      body.push(chunk);
    })
    .on('end', () => {
      response.writeHead(200, {"Content-Type": "text/plain"})
      body = Buffer.concat(body).toString();
      const birthDay = new Date(body);
      const day = birthDay.getDay() + 1;
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      const exactDay = days[day];
      response.end(`${exactDay}`);
    })
  } else{
    response.statusCode = 404;
    response.end();
  }
})

server.listen(8001);
console.log("server run is http://localhost:8001")
