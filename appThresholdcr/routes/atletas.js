const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Athlete = require('../models/Athlete');

const jwt =require('jsonwebtoken');

//atletas

router.get('/athletes', function(req, res, next) {
    Athlete
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ message: 'Error getting athlete' }));
});

router.get('/athletes/:id', function(req, res, next) {
	Athlete.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

router.post('/registrarAtleta',async(req,res)=>{
    
    const {name,userName,password,category,age,weight,height}=req.body;
    
    const newUser=new Athlete({name,userName,password,category,age,weight,height});
    console.log(newUser);
    await newUser.save();
    const token=jwt.sign({_id: newUser._id},'secreteKey')

    res.status(200).json({token});
})

router.put('/athletes/put/:id', async(req, res, next) => {
    console.log('BODY PARAMS ARE:' + req.body.age);
    Athlete.findByIdAndUpdate(req.params.id, {
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
module.exports=router;
