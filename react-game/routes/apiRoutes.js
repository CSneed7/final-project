module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();
	const db = require('../models');
	var bcrypt = require("bcrypt");

	router.get("/isloggedin", function (req, res, next) {
		passport.authenticate('local', function (err, user, info) {
			if (err) { return next(err); }

			if (!user) { return res.json({ loggedin: false }) }

			return res.json({ loggedin: true });

		})(req, res, next);
	})

	router.get("/userscore/:userId", function (req, res) {
		db.User.findOne({ _id: req.params.userId }).then(data => {
			return res.json(data)
		})
	})

	router.get("/allscore", function (req, res) {
		var query = db.User.find().sort([['score', 'descending']])
		query.select('username score')
		query.exec(function (err, data) {
			return res.json(data)
		})
	})

	router.post("/postScore/:userId", function (req, res) {
		console.log(req.body)
		db.User.findOneAndUpdate({ _id: req.params.userId }, {$set: { score: req.body.score}}, {new: true}).then(data => {
			console.log(data)
			return res.json(data)
		})
	}) 

	return router;
};