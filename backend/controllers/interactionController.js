// interactionController.js
const Interaction = require('../models/Interaction'); // Adjust the path based on your actual Interaction model

// Get all interactions
const getInteractions = async (req, res) => {
    try {
        const interactions = await Interaction.find();
        res.status(200).json(interactions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new interaction
const addInteraction = async (req, res) => {
    const interaction = new Interaction({
        // Adjust according to your Interaction model schema
        userId: req.user.id, // Assuming the user is authenticated
        medicationId: req.body.medicationId,
        notes: req.body.notes,
    });

    try {
        const savedInteraction = await interaction.save();
        res.status(201).json(savedInteraction);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getInteractions, addInteraction };
