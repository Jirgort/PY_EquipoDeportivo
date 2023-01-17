const { Schema, model } = require('mongoose');

const EventTypeSchema = new Schema({
    eventType:String
});

module.exports = model('EventType', EventTypeSchema);