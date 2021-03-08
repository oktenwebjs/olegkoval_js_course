const { model } = require('mongoose');

const AuthSchema = require('./Auth');
const UserSchema = require('./User');
const UserAddressSchema = require('./UserAddress');

module.exports = {
    Auth: model('Auth', AuthSchema),
    User: model('User', UserSchema),
    UserAddress: model('UserAddress', UserAddressSchema)
};
