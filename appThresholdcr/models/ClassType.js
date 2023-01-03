const { Schema, model } = require('mongoose');

const ClassTypeSchema = new Schema({
    type: String
});

module.exports = model('ClassType', ClassTypeSchema);
