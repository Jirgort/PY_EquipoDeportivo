const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Class = require('../models/Class');
const Classes = require('../models/ClassType');
const jwt =require('jsonwebtoken');

// CLASSES OPERATIONS START.
router.post('/createClass',async(req,res) => {
	const { title, type, coachId, date, room, athletes } = req.body;
	console.log("CLASS COACHID TO SAVE: " + req.body.coachId);
	console.log("CLASS TYPE TO SAVE: " + req.body.type);

	const newClass = new Class( {title, type, coachId, date, room, athletes } );
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
	Classes.updateOne({_id: id}, {$push: {"athletes.$[]": user}})
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
	  const {type}=req.body;
	  const newClassesType=new Classes({type});
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
