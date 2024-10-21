// interactionRoutes.js
const express = require('express');
const { getInteractions, addInteraction } = require('../controllers/interactionController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Protect the routes
router.use(protect);

// Define the routes
router.get('/', getInteractions); // Get all interactions
router.post('/', addInteraction); // Create a new interaction

module.exports = router;
