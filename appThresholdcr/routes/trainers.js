const express = require('express');
const router = express.Router();
const coachShema = require('../models/Coach');

//router.get('/', (req, res) => res.send("hola mundo"))
router.get('/trainers', function(req, res, next) {
	coachShema
		.find()
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting trainers' }));
});

router.get('/trainer/:id', function(req, res, next) {
	coachShema
		.findById(req.params.id)
		.then((data) => res.json(data))
		.catch((err) => res.status(500).json({ message: 'Error getting trainer' }));
});
module.exports = router;