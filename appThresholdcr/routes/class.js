const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Class = require('../models/Class');
const Classes = require('../models/ClassType');
const jwt =require('jsonwebtoken');

// CLASSES OPERATIONS START.
router.post('/createClass',async(req,res) => {
	const { title, type, coachId, date, room } = req.body;
	console.log("CLASS COACHID TO SAVE: " + req.body.coachId);
	console.log("CLASS TYPE TO SAVE: " + req.body.type);
	let coachIdInt = Number(coachId);
	const newClass = new Class( {title, type, coachIdInt, date, room} );
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
// CLASSES OPERATIONS END.



module.exports=router;
