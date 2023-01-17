const { Schema, model } = require('mongoose');

const NewsSchema = new Schema({
    newsTitle: String,
    newsContent: String,
    newsDate: Date,
    upVotes: [],
    downVotes: []

});

module.exports = model('News', NewsSchema);
