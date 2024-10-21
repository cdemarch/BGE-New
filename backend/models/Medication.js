// models/Medication.js
const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dosage: { type: String, required: true },
    frequency: { type: String, required: true },
});

module.exports = mongoose.model('Medication', medicationSchema);
