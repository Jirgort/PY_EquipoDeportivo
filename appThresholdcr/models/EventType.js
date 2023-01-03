const { Schema, model } = require('mongoose');

const EventTypeSchema = new Schema({
    type: String
});

module.exports = model('EventType', EventTypeSchema);
