require('dotenv').config();
const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const connectDB = require('./db/db.connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send("<h1>Hi Server!</h1>");
})

app.use('/api/v1/users', userRoute);
app.use(notFound);
app.use(errorHandlerMiddleware);

// app.listen(port, console.log('Server at '+ port))
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => {
			console.log('Server at '+ port);
		})
	} catch(err) {
		console.log(err);
	}
}

start();