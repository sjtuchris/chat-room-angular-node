var mongoose = require('mongoose');

var CredentialSchema = mongoose.Schema({
    username: String,
    password: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Credential', CredentialSchema);