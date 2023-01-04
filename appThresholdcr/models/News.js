const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
    title: String,
    content: String,
    votes: Number
});

module.exports = model('News', NewsSchema);
