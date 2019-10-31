const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  resave: false,
  saveUnitialized: false,
  secret: 'this_is_the_secret!'
}))

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hellow: 'world', counter: req.session.count })
})

app.listen(3000, () => {
  console.log('listening http://localhost:3000')
})