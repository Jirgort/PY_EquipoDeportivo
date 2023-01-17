const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Class = require('../models/Class');
const Classes = require('../models/ClassType');
const jwt =require('jsonwebtoken');
const Athlete = require('../models/Athlete');

// CLASSES OPERATIONS START.
router.post('/createClass',async(req,res) => {
	const { classTitle, type, coachId, classDate, room, athletes } = req.body;
	console.log("CLASS COACHID TO SAVE: " + req.body.coachId);
	console.log("CLASS TYPE TO SAVE: " + req.body.type);

	const newClass = new Class( { classTitle, type, coachId, classDate, room, athletes } );
	await newClass.save();
	const token = jwt.sign({_id: newClass._id},'secreteKey')

	res.status(200).json({token});
})
router.get('/class', function(req, res, next) {
	Class
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting classes' }));
});

router.put('/class/enroll', async(req,res)=>{
	const { id, user } = req.body;
	console.log("USER " + user + " ENROLLING TO CLASS " + id);
	Classes.findByIdAndUpdate({_id: id}, {$push: {"athletes.$[]": user}})
  });

router.put('/class/put/:id', async(req, res, next) => {
  console.log('BODY PARAMS ROOM ARE:' + req.body.room);
  Class.findByIdAndUpdate(req.params.id, {
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

router.delete('/class/delete/:id', async(req,res)=>{
	Class.deleteOne({
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
// CLASSES OPERATIONS END.
router.get('/classesTypes', function(req, res, next) {
	Classes
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting events' }));
});
router.post('/createClassesType',async(req,res)=>{
	console.log("entra")
	  const {classType}=req.body;
	  const newClassesType=new Classes({classType});
	  await newClassesType.save();
	  const token=jwt.sign({_id: newClassesType._id},'secreteKey')
  
	  res.status(200).json({token});
  });

  router.delete('/classesTypes/delete/:id', async(req,res)=>{
	Classes.deleteOne({
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



module.exports=router;
