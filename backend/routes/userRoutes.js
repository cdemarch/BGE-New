const express = require('express');
const router = express.Router();

// Example user handler function
router.get('/', (req, res) => {
    res.send([{ _id: 1, name: 'John Doe' }, { _id: 2, name: 'Jane Doe' }]);
});

// Other user-related routes here...

module.exports = router;
