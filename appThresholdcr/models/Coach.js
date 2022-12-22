const { Schema, model } = require('mongoose');

const coachSchema = new Schema({
    name: String,
    age: Number,
    weight: Number,
    height: Number
});

module.exports = model('Coach', coachShema);
