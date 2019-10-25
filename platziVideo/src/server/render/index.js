import getManifest from '../getManifest';
import dotenv from 'dotenv';
dotenv.config();

const ENV = process.env.NODE_ENV;
const isProd = ENV === 'production';
const files = getManifest();

const render = (html, preloadedState) => {
  return (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="${isProd ? files['main.css'] : './assets/app.css' }" type="text/css" />
      </head>
      <body>
      <div id="app">${html}</div>
      <script type="text/javascript">
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="${isProd ? files['main.js'] : './assets/app.js'}" type="text/javascript"></script>
      <script src="${isProd ? files['vendors.js'] : './assets/vendor.js'}" type="text/javascript"></script>
    </body>
    </html>
  `);
};

export default render;