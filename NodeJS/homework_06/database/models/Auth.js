const { Schema } = require('mongoose');

const Auth = new Schema({
    access_token: { type: String, required: true },
    refresh_token: { type: String, required: true },
    _user_id: { type: Schema.Types.ObjectId, ref: 'User' }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

Auth.pre('find', function() {
    this.populate('_user_id');
});

Auth.pre('findOne', function() {
    this.populate('_user_id');
});

module.exports = Auth;
