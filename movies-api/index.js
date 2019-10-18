const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies')
const { logErrors, errorHandler, wrapError } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());

//routes
moviesApi(app);

//catch 404
app.use(notFoundHandler);

//error middlewares
app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(config.port, function(){
  console.log(`listening http://localhost:${config.port}`)
});