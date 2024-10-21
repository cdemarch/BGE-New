// models/Interaction.js
const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Adjust according to your User model
        required: true,
    },
    medicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medication', // Adjust according to your Medication model
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Interaction = mongoose.model('Interaction', interactionSchema);
module.exports = Interaction;
