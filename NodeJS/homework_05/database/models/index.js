const { model } = require('mongoose');

const UserSchema = require('./User');
const UserAddressSchema = require('./UserAddress');

module.exports = {
    User: model('User', UserSchema),
    UserAddress: model('UserAddress', UserAddressSchema)
};
