const User = require("../models").User;
module.exports = function (passport) {
	const path = require("path");
	const router = require('express').Router();

	router.get("/isAuthenticated", function (req, res) {
		if (req.isAuthenticated()) {
			res.json({
				userId: req.user._id,
				username: req.user.username,
				isAuthenticated: true
			});
			//you can also pass up any other fields you with to expose
			//for example, 
			//nickname: req.user.nickname
		} else {
			res.json({
				userId: null,
				username: null,
				isAuthenticated: false
			});
		}
	});

	router.post("/signup", function (req, res) {
		const newUser = req.body;
		User.find({ username: newUser.username }).then(data => {
			console.log(data.length);
			if (data.length === 0) {
				console.log(data)
				User.register(newUser, newUser.password, (err, user) => {
					if (err) { return res.json(err.message); }
					res.json({
						userId: user._id,
						username: user.username,
						isAuthenticated: true,
						createdUser: true
					});
				});
			}
			else {
				res.json({createdUser: false});
				console.log(data)
			}
		});
	});

	router.post("/login", passport.authenticate('local'), function (req, res) {
		// console.log(req.user);
		const oldUser = req.body;
		User.findOne({ username: oldUser.username }).then(data => {
			if (oldUser.password === data.password) {
				res.json({
					userId: req.user._id,
					username: req.user.username,
					isAuthenticated: true
				});
			}
			else {
				res.json("Username and/or password did not match.");
			}
		})
	});

	router.get('/logout', function (req, res) {
		req.logout();
		res.json();
	});

	return router;
};