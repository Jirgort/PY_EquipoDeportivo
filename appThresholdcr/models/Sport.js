const { Schema, model } = require('mongoose');

const SportSchema = new Schema({
    name: String
});

module.exports = model('Sport', SportSchema);
