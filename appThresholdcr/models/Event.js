const { Schema, model } = require('mongoose');

const EventSchema = new Schema({
    eventType: String,
    eventTitle: String,
    sportClass: String,
    eventContent: String,
    eventDate: Date,
    athletes:[]
});

module.exports = model('Event', EventSchema);
