const { Schema, model } = require('mongoose');

const SportSchema = new Schema({
    sportName: String
});

module.exports = model('Sport', SportSchema);
