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

router.put('/Sports/put/:id', async(req, res, next) => {
    console.log('BODY PARAMS ARE:' + req.body.age);
    Sport.findByIdAndUpdate(req.params.id, {
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

router.delete('/Sports/delete/:id', async(req,res)=>{

    Sport.deleteOne({
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
});

module.exports = router;