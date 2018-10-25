const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
	username: {
		type: String,
		allowNull: false
	},
	password: {
		type: String,
		allowNull: false
	} 
	//you may replace this 'name' field with anything you like
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);