const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    votes: Number
});

module.exports = model('News', NewsSchema);
