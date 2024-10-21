// userController.js
const User = require('../models/User'); // Adjust based on your user model

// Get all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetch users from the database
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Add a new user
const addUser = async (req, res) => {
    const { name, email, password } = req.body; // Adjust based on your user fields

    const newUser = new User({ name, email, password }); // Create a new user instance

    try {
        await newUser.save(); // Save user to the database
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: 'Error creating user' });
    }
};

module.exports = {
    getUsers,
    addUser
};
