// forumController.js
const Forum = require('../models/Forum'); // Adjust the path based on your actual Forum model

// Get all forums
const getForums = async (req, res) => {
    try {
        const forums = await Forum.find();
        res.status(200).json(forums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new forum
const addForum = async (req, res) => {
    const forum = new Forum({
        // Adjust according to your Forum model schema
        title: req.body.title,
        content: req.body.content,
        createdBy: req.user.id, // Assuming the user is authenticated
    });

    try {
        const savedForum = await forum.save();
        res.status(201).json(savedForum);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getForums, addForum };
