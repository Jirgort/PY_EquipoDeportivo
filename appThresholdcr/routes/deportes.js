const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Sport = require('../models/Sport');

const jwt =require('jsonwebtoken');

//Sports

router.get('/Sports', function(req, res, next) {
	Sport
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting sports' }));
});

router.post('/registrarDeporte',async(req,res)=>{
    const {name}=req.body;
    console.log("SPORT TO SAVE: " + req.body.age);
    const newUser=new Sport({name});
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})

module.exports = router;