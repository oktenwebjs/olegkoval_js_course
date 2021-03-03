const bcrypt = require('bcrypt');

const salt = 10;

module.exports = {
    hash: (plainPassword) => bcrypt.hash(plainPassword, salt),
    compare: (plainPassword, hashedPassword) => bcrypt.compare(plainPassword, hashedPassword)
};
