const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index');
const appPort = 8000;

const app = express();
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));
app.engine('.hbs', expressHbs({
   extname: 'hbs',
   defaultLayout: 'main',
   partialsDir: path.join(__dirname, 'static', 'partials')
}));

app.use('/', router);

app.listen(appPort, () => {
   console.log('Server is running ...');
});