require('dotenv').config();
const connectDB = require('./db/db.connect');
const User = require('./models/user.model');
const userData = require('./anime-users.json');

const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		await User.deleteMany();
		await User.create(userData);
		console.log('Success!');
		process.exit(0);
	} catch(err) {
		console.log(err);
		process.exit(1);
	}
}

start();

start();