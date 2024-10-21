// controllers/medicationController.js
const Medication = require('../models/Medication');

const getMedications = async (req, res) => {
    try {
        const medications = await Medication.find();
        res.json(medications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addMedication = async (req, res) => {
    const medication = new Medication(req.body);
    try {
        const savedMedication = await medication.save();
        res.status(201).json(savedMedication);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getMedications, addMedication };
