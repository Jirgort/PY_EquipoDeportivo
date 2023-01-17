const { Schema, model } = require('mongoose');

const ClassTypeSchema = new Schema({
    classType: String
});

module.exports = model('ClassType', ClassTypeSchema);
