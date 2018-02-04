var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
    fromUserId: String,
    toUserId: String,
    toGroupId: String,
    content: String,
    pubDate: Date,
}, {
    timestamps: true
});

module.exports = mongoose.model('Message', MessageSchema);