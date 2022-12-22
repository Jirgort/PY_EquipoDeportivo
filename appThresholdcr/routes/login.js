const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();




const Coach = require('../models/User');
const jwt =require('jsonwebtoken')
router.get('/', (req, res) => res.send("hola mundo"));

router.post('/signup',async(req,res)=>{
    const {Nombre, Contracena}=req.body;
    console.log({Nombre, Contracena})
    const newUser=new Coach({Nombre,Contracena});
    console.log(newUser)
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})

router.post('/signin',async(req,res)=>{
    const{Contracena,Nombre}=req.body;
    const coach=await Coach.findOne({Nombre});
    console.log(Nombre)
    console.log(Contracena)
    if (!coach) return res.status(401).send("The email doesn't exists");
    if (coach.Contracena !== Contracena) return res.status(401).send( 'wrong Password');

    const token=jwt.sign({_id:coach._id}, 'secreteKey');
    return res.status(200).json({token})

 
})
module.exports=router;