const { Schema, model } = require('mongoose');

const ClassesSchema = new Schema({
    classTitle: String,
    type: String,
    coachId: String,
    classDate: Date,
    room: Number,
    athletes: []
});

module.exports = model('Classes', ClassesSchema);
