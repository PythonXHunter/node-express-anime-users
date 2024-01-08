const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = Schema({
	name: {
		type: String,
		required: [true, 'name is required'],
	},
	age: {
		type: Number,
		required: [true, 'age is required'],
	},
	phone_number: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ['Male', 'Female', 'Non-binary'],
		message: 'enum validation failed for the {VALUE} ',
	},
	favorite_anime:{
		type: String,
		required: [true, 'Anime named must provided'],
	},
	top_3_anime: {
		type: [String],
	},
})

module.exports = mongoose.model('Users', userSchema);