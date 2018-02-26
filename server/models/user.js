var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    username: String,
    nickname: String,
    email: String,
    whats_up: String,
    gender: String,
    avator: String,
    firstName: String,
    lastName: String,
    country: String,
    registerDate: Date,
    status: String,
    online: Boolean,
    lastLogout: Date,
    threadList: [String],
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);