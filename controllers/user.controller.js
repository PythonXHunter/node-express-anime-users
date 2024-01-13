const User = require('../models/user.model');
const axios = require('axios');

getAllUsers = async (req, res) => {
	const users = await User.find({});
	// res.status(200).json({ query_length: users.length, users });
	// const query = await axios.get('')
	res.render('index', { users: users});
}

getUsers = async (req, res) => {
	// console.log(req.params);
	const { id: userID }= req.params;
	const user = await User.find({ _id: userID });
	res.render('index', { url: user});
}

updateUser = async (req, res) => {
	const {id: userID } = req.params;
	// console.log(req.body);
	const user = await User.findByIdAndUpdate(
		{ _id: userID}, req.body, {
			new: true,
		}
	);
	res.status(200).json({ user, msg: "Success!"});
}

createUser = async (req, res) => {
	console.log(req.body);
	const user = await User.create(req.body);
	console.log(user);
	res.status(200).json({ user, msg: "Success!" });
}

deleteUser = async (req, res) => {
	console.log(req.params);
	const { id: UserID} = req.params;
	const user = await User.findByIdAndDelete({ _id: UserID });
	console.log(user);
	res.status(200).json({ user, msg: "Success!"});
}

module.exports = {
	getAllUsers,
	getUsers,
	updateUser,
	createUser,
	deleteUser,
}