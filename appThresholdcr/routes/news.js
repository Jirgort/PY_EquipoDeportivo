const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const News = require('../models/News');
const jwt =require('jsonwebtoken');

router.post('/createNews',async(req,res) => {
	const { title, content, date, votes } = req.body;
	console.log("NEWS TO SAVE: " + req.body.title);
	const newNews = new News( {title, content, date, votes} );
	await newNews.save();
	const token = jwt.sign({_id: newNews._id},'secreteKey')

	res.status(200).json({token});
})
router.get('/news', function(req, res, next) {
	News
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting trainers' }));
});
module.exports=router;
