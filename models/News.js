const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('News', newsSchema);