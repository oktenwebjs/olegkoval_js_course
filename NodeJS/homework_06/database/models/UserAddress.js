const { Schema } = require('mongoose');

const UserAddressSchema = new Schema({
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: false },
    country: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = UserAddressSchema;
