const render = (html, preloadedState) => {
  return (`
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <link rel="stylesheet" href="assets/app.css" type="text/css" />
      </head>
      <body>
      <div id="app">${html}</div>
      <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>
      <script src="assets/app.js" typ="text/javascript"></script>
      <script src="assets/vendor.js" typ="text/javascript"></script>
    </body>
    </html>
  `);
};

export default render;