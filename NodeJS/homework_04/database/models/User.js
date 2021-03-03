const { Schema } = require('mongoose');

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: [{ type: Schema.Types.ObjectId, ref: 'UserAddress' }],
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

UserSchema.virtual('fullname').get(function() {
    return `${this.firstname} ${this.lastname}`;
});

UserSchema.pre('find', function() {
    this.populate('address');
});

UserSchema.pre('findOne', function() {
    this.populate('address');
});

UserSchema.pre('findByIdAndRemove', function() {
    this.populate('address');
});

module.exports = UserSchema;
