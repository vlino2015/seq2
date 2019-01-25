var express      = require('express');

//const SequelizeStore = require('sequelize-session-store')(session);
//notes
var app = express();
app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/login'));

app.use(require('./routes/register'));
app.use(require('./routes/dashboard'));
app.use(require('./routes/logout'));


app.listen(3001);