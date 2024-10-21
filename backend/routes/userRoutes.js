// userRoutes.js
const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/', getUsers); // GET /api/users to get all users
router.post('/', addUser); // POST /api/users to add a new user

module.exports = router;
