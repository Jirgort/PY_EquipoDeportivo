const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    type: String,
    title: String,
    sportClass: String,
    content: String,
    date: Date,
    maxMember: String,
    athletes:[]
});

module.exports = model('Event', EventSchema);
