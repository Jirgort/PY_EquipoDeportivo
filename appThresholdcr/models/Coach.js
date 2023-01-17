const { Schema, model } = require('mongoose');

const CoachSchema = new Schema({
    coachName: String,
    coachUserName:String,
    coachPassword:String,
    coachBirth: Number,
    coachWeight: Number,
    coachHeight: Number
});

module.exports = model('Coach', CoachSchema);
