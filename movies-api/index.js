const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies')
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');
// app.get('/', function(req, res){
//   res.send("iwdr");
// })

// app.get('/json', function(req, res){
//   res.send({ hl: 'asdss' });
// })
app.use(express.json());
moviesApi(app);
app.use(logErrors);
app.use(errorHandler);

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`)
});