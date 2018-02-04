var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    gender: String,
    avator: String,
    registerDate: Date,
    lastLogin: Date,
    status: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);