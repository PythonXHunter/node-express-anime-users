const express = require('express');
const router = express.Router();
const {
	getAllUsers,
	getUsers,
	updateUser,
	createUser,
	deleteUser,
} = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.get('/:id', getUsers);
router.patch('/:id', updateUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;