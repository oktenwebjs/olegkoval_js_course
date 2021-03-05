const mongodb = require('mongoose');

const { mongooseConfig } = require('../../constants');

module.exports = () => {
    mongodb.connect(`mongodb://${mongooseConfig.HOST}:${mongooseConfig.PORT}/${mongooseConfig.DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    const db = mongodb.connection;

    db.on('error', (err) => console.log(`DB connection error: ${err}`));
};
