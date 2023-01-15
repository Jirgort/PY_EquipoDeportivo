const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
    title: String,
    content: String,
    date: Date,
    upVotes: [],
    downVotes: []

});

module.exports = model('News', NewsSchema);
