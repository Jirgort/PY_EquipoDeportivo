const { Schema, model } = require('mongoose');

const ClassesSchema = new Schema({
    title: String,
    type: String,
    coachId: Number,
    date: Date,
    room: Number
});

module.exports = model('Classes', ClassesSchema);
