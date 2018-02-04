var mongoose = require('mongoose');

var GroupSchema = mongoose.Schema({
    groupName: String,
    groupSize: Number,
    groupAvator: String,
    registerDate: Date,
    GroubMember: [String],
    Status: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Group', GroupSchema);