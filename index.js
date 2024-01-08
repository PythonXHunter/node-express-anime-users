const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');

app.use(express.json());

const port = 3000;

app.get('/', (req, res) => {
	res.send("<h1>Hi Server!</h1>");
})

app.use('/api/v1/users', userRoute);

app.listen(port, console.log('Server at '+ port))