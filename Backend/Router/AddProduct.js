const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the product Route ✅');
});

module.exports = router; // ✅ Make sure this is exporting the router
