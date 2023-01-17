const { Schema, model } = require('mongoose');

const AthleteSchema = new Schema({
    athleteName: String,
    athleteUserName:String,
    athletePassword:String,
    category: [],
    athleteBirth: Number,
    athleteWeight: Number,
    athleteHeight: Number
});

module.exports = model('Athlete', AthleteSchema);