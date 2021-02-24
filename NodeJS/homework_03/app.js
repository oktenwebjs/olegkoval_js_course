const express = require('express');
const path = require('path');

const ApiRouter = require('./routes/api.route');

const appPort = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', ApiRouter);

app.listen(appPort, () => {
    console.log('Server is running...');
});