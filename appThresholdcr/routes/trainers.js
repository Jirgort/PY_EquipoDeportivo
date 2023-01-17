const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Coach = require('../models/Coach');

const jwt =require('jsonwebtoken');

router.get('/trainers', function(req, res, next) {
	Coach
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting trainers' }));
});

router.get('/trainers/:id', function(req, res, next) {
	Coach.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

router.post('/registrarEntrenador',async(req,res)=>{
    const {coachName,coachUserName,coachPassword,coachAge,coachWeight,coachHeight}=req.body;
    const newUser=new Coach({coachName,coachUserName,coachPassword,coachAge,coachWeight,coachHeight});
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
});
module.exports = router;