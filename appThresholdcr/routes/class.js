const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const Class = require('../models/Class');
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

// CLASSES OPERATIONS END.



module.exports=router;
