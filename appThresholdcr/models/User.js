const { Schema, model } = require('mongoose');

const UserShema =new Schema({
    Nombre: String,
    Contracena: String,
    typeUser:String,
    

});

module.exports=model('User',UserShema);