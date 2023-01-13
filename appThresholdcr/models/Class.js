const { Schema, model } = require('mongoose');

const ClassesSchema = new Schema({
    title: String,
    type: String,
    coachId: String,
    date: Date,
    room: Number,
    athletes: []
});

module.exports = model('Classes', ClassesSchema);
