const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const User = require('../models/User');
//const News = require('../models/News');

const jwt =require('jsonwebtoken');
router.get('/', (req, res) => res.send("hola mundo"));


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
    if(TypeUser=="Manager"){
        const user=await User.findOne({Nombre});
        console.log(Nombre)
        console.log(user)
        console.log(Contracena)
        if (!user) return res.status(401).send("The name admin doesn't exists");
        if (user.Contracena !== Contracena) return res.status(401).send( 'wrong Password');

        const token=jwt.sign({_id:user._id}, 'secreteKey');
        return res.status(200).json({token})
    }
    if(TypeUser=="Trainer"){
        const userName=Nombre;
        const coach=await Coach.findOne({userName});
        console.log(Nombre)
        console.log(coach)
        console.log("xxxxxxxxxxxxxxxxxxxxx")
        console.log(Contracena)
        if (!coach) return res.status(401).send("The name trainer doesn't exists");
        if (coach.password !== Contracena) return res.status(401).send( 'wrong Password');

        const token=jwt.sign({_id:coach._id}, 'secreteKey');
        return res.status(200).json({token})
    }
 
})
module.exports=router;