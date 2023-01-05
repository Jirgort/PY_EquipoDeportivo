const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Event = require('../models/Event');

const jwt =require('jsonwebtoken');

router.get('/events', function(req, res, next) {
	Event
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting events' }));
});

router.post('/createEvent',async(req,res)=>{
  console.log("entra")
    const {type,title,sportClass,content,date,maxMember}=req.body;
    const newEvent=new Event({type,title,sportClass,content,date,maxMember});
    await newEvent.save();
    const token=jwt.sign({_id: newEvent._id},'secreteKey')

    res.status(200).json({token});
})


router.put('/events/put/:id', async(req, res, next) => {
    console.log('BODY PARAMS ARE:' + req.body.type);
    Event.findByIdAndUpdate(req.params.id, {
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


router.delete('/events/delete/:id', async(req,res)=>{

    Event.deleteOne({
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