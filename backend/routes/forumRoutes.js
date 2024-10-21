// forumRoutes.js
const express = require('express');
const { getForums, addForum } = require('../controllers/forumController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect the routes
router.use(protect);

// Define the routes
router.get('/', getForums); // Get all forums
router.post('/', addForum); // Create a new forum

module.exports = router;
