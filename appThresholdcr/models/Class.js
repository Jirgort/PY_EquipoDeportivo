const { Schema, model } = require('mongoose');

const ClassesSchema = new Schema({
    title: String,
    type: String,
    coachId: Number,
    date: String,
    room: Number
});

module.exports = model('Classes', ClassesSchema);
