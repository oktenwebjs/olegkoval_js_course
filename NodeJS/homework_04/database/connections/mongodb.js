const mongodb = require('mongoose');

const host = '127.0.0.1';
const port = '27017';
const dbname = 'users';

module.exports = () => {
    mongodb.connect(`mongodb://${host}:${port}/${dbname}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    const db = mongodb.connection;

    db.on('error', (err) => console.log(`DB connection error: ${err}`));
};
