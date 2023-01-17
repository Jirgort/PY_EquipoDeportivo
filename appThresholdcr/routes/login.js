const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const User = require('../models/User');
const Coach = require('../models/Coach');
const Athlete = require('../models/Athlete');
//const News = require('../models/News');

const jwt =require('jsonwebtoken');
router.get('/', (req, res) => res.send("hola mundo"));


router.get('/trainers', function(req, res, next) {
	Coach
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting trainers' }));
});
router.post('/registrarEntrenador',async(req,res)=>{
    console.log("REQUEST TO SAVE: " + req.body.coachName.toString());
    const {coachName,coachUserName,coachPassword,coachBirth,coachWeight,coachHeight}=req.body;
    //console.log("COACH TO SAVE: " + req.body.age);
    const newUser=new Coach({coachName,coachUserName,coachPassword,coachBirth,coachWeight,coachHeight});
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})


router.put('/trainers/put/:id', async(req, res, next) => {
    console.log('BODY PARAMS ARE:' + req.body.age);
    Coach.findByIdAndUpdate(req.params.id, {
        $set: req.body
      }, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
          console.log('UPDATE DATA IS:' + data);
          console.log('Data updated successfully');
          return res.status(200).json;
        }
      })
})

router.delete('/trainers/delete/:id', async(req,res)=>{

    Coach.deleteOne({
        _id: req.params.id
    }, function(err) {
        if(err) {
            console.log("DELETE OPERATION FAILED.");
            res.json(err);
        } else {
            console.log("DELETE OPERATION SUCCEDED.");
            //res.redirect('/')
        }
    })
})

router.get('/athletes', function(req, res, next) {
    Athlete
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: 'Error getting athlete' }));
});


router.post('/registrarAtleta',async(req,res)=>{
    
    const {athleteName,athleteUserName,athletePassword,category,athleteBirth,athleteWeight,athleteHeight}=req.body;
    
    const newUser=new Athlete({athleteName,athleteUserName,athletePassword,category,athleteBirth,athleteWeight,athleteHeight});
    console.log(newUser);
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})

router.delete('/athletes/delete/:id', async(req,res)=>{

    Athlete.deleteOne({
        _id: req.params.id
    }, function(err) {
        if(err) {
            console.log("DELETE OPERATION FAILED.");
            res.json(err);
        } else {
            console.log("DELETE OPERATION SUCCEDED.");
            //res.redirect('/')
        }
    })
})


// login
router.post('/signup',async(req,res)=>{
    const {Nombre, Contracena}=req.body;
    console.log({Nombre, Contracena})
    const name=Nombre;
    const password=Contracena;
    const newUser=new Coach({name,password,Nombre});
    console.log(newUser)
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})

router.post('/signin',async(req,res)=>{
    const{Contracena,Nombre,TypeUser}=req.body;
    if(TypeUser=="Admin"){
        const user=await User.findOne({Nombre});
        console.log(Nombre)
        console.log(user)
        console.log(Contracena)
        if (!user) return res.status(401).send("The name admin doesn't exists");
        if (user.Contracena !== Contracena) return res.status(401).send( 'wrong Password');

        const token=jwt.sign({_id:user._id}, 'secreteKey');
        return res.status(200).json({token})
    } else if(TypeUser=="Entrenador"){
        const coachUserName=Nombre;
        const coach=await Coach.findOne({coachUserName});
        console.log(Nombre)
        console.log(coach)
        console.log("xxxxxxxxxxxxxxxxxxxxx")
        console.log(Contracena)
        if (!coach) return res.status(401).send("The name trainer doesn't exists");
        if (coach.coachPassword !== Contracena) return res.status(401).send( 'wrong Password');

        const token=jwt.sign({_id:coach._id}, 'secreteKey');
        return res.status(200).json({token})
    } else if(TypeUser == "Atleta") {
        const athleteUserName = Nombre;
        const athlete = await Athlete.findOne({athleteUserName});
        console.log(Nombre)
        console.log(athlete)
        console.log("xxxxxxxxxxxxxxxxxxxxx")
        console.log(Contracena)
        if (!athlete) return res.status(401).send("The athlete name doesn't exists");
        if (athlete.athletePassword !== Contracena) return res.status(401).send( 'wrong Password');

        const token=jwt.sign({_id:athlete._id}, 'secreteKey');
        return res.status(200).json({token})
    }
 
})
module.exports=router;