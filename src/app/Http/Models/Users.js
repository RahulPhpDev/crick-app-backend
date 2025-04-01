const mongoose = require('mongoose');
const schema = {
    name: String,
    email: String,
    password: String,
    role: String,
    isActive: Boolean,
    created_at: {type: Date, default: Date.now},
}

const Schema = mongoose.Schema(schema);

module.exports = new mongoose.model('Users', Schema);