// medicationRoutes.js
const express = require('express');
const { getMedications, addMedication } = require('../controllers/medicationController');
const { protect } = require('../middleware/authMiddleware'); // Ensure this path is correct

const router = express.Router();

router.use(protect);  // Protect all routes

router.get('/', getMedications);
router.post('/', addMedication);

module.exports = router;
