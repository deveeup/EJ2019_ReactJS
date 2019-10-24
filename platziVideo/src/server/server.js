import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import main from '../server/routes/main';
dotenv.config();

const ENV = process.env.NODE_ENV,
PORT = process.env.PORT || 3001;

const app = express();

if(ENV === 'development'){
  console.log('loading dev config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = webpack(webpackConfig);
  const serverConfig = {
    contentBase: `http://localhost${PORT}`,
    port: PORT,
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
  };
  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', main);

app.listen(PORT, (err) => {
  err && console.log(err);
  console.log(`Server runing on http://localhost:${PORT}`);
});