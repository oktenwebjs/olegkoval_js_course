const { Schema } = require('mongoose');

const UserAddress = require('./UserAddress');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: [UserAddress]
});

module.exports = UserSchema;
