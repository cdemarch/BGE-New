// models/Forum.js
const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Adjust according to your User model
        required: true,
    },
}, { timestamps: true });

const Forum = mongoose.model('Forum', forumSchema);
module.exports = Forum;
