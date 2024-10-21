// authMiddleware.js
const jwt = require('jsonwebtoken');

// Protect middleware
const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
};

module.exports = { protect };