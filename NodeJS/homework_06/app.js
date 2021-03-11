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

app.use('*', (err, req, res, next) => {
    if (err) {
        res.status(err.status).json({
            error: true,
            message: err.message
        });
    }

    next();
});

app.listen(appConfig.APP_PORT, () => {
    console.log(`Server is running on port ${appConfig.APP_PORT} ...`);
});
