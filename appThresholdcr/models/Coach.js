const { Schema, model } = require('mongoose');

const CoachSchema = new Schema({
    name: String,
    userName:String,
    password:String,
    age: Number,
    weight: Number,
    height: Number
});

module.exports = model('Coach', CoachSchema);
