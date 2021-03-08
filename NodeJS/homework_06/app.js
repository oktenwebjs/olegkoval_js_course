const express = require('express');

const ApiRouter = require('./routes/api.route');
const { dbConnection } = require('./database/connections');
const { appConfig } = require('./constants');

require('dotenv').config();

const app = express();

// connect to DB
dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', ApiRouter);

app.listen(appConfig.APP_PORT, () => {
    console.log(`Server is running on port ${appConfig.APP_PORT} ...`);
});
