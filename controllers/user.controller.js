const User = require('../models/user.model');

getAllUsers = async (req, res) => {
	const users = await User.find({});
	// console.log(users.length);
	res.status(200).json({ users, query_length: users.length});
}

module.exports = {
	getAllUsers,
}