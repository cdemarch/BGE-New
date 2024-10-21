const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const medicationRoutes = require('./routes/medicationRoutes');
const forumRoutes = require('./routes/forumRoutes');
const interactionRoutes = require('./routes/interactionRoutes'); // Ensure this path is correct
require('dotenv').config();

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());


// Routes
app.use('/api/users', userRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/forum', forumRoutes);
app.use('/api/interactions', interactionRoutes); // Ensure this route is implemented

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// Set the port from environment variable or use 4000 as default
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error));

module.exports = app;
