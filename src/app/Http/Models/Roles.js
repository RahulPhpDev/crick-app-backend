const mongoose = require('mongoose');

const schema = {
    name: String,
}

module.exports = new mongoose.model('Roles', schema);