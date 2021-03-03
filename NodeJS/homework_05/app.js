const express = require('express');

const ApiRouter = require('./routes/api.route');
const _dbConnection = require('./database/connections/mongodb');

const appPort = 8000;
const app = express();

// connect to DB
_dbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', ApiRouter);

app.listen(appPort, () => {
    console.log(`Server is running on port ${appPort} ...`);
});
