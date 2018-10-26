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

	router.get("/userscore/:userId", function(req, res){
		console.log(req.params.userId)
		db.User.findOne({ _id: req.params.userId }).then(data => {
			console.log(data.score)
		})
	})


	return router;
};