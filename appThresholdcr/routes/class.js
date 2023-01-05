const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const News = require('../models/Class');
const jwt =require('jsonwebtoken');

// CLASSES OPERATIONS START.
router.post('/createClass',async(req,res) => {
	const { title, type, coachId, date, room } = req.body;
	console.log("CLASS TO SAVE: " + req.body.title);
	const newClass = new News( {title, type, coachId, date, room} );
	await newClass.save();
	const token = jwt.sign({_id: newClass._id},'secreteKey')

	res.status(200).json({token});
})
router.get('/news', function(req, res, next) {
	News
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting classes' }));
});

// CLASSES OPERATIONS END.



module.exports=router;
