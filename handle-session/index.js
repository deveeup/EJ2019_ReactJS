const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
  resave: false, //no se guardará la cookie cada vez que se haga un cambio
  saveUnitialized: false, //por defecto si la cookie no se ha inicializado no la guardará por defecto.
  secret: 'this_is_the_secret!' //para que la cookie se cifre con este secreet.
}))

app.get('/', (req, res) => {
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hellow: 'world', counter: req.session.count })
})

app.listen(3000, () => {
  console.log('listening http://localhost:3000')
})