const express = require('express');
const {Router}=require('express');
const { async } = require('rxjs');
const router =Router();

const News = require('../models/News');
const jwt =require('jsonwebtoken');


// NEWS OPERATIONS START.
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

router.delete('/news/delete/:id', async(req,res)=>{

    News.deleteOne({
        _id: req.params.id
    }, function(err) {
        if(err) {
            console.log("NEWS DELETE OPERATION FAILED.");
            res.json(err);
        } else {
            console.log("NEWS DELETE OPERATION SUCCEDED.");
            //res.redirect('/')
        }
    })
})
// NEWS OPERATIONS END.

module.exports=router;
