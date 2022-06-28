const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Esta es la REST API para la apliación Notes");
});

module.exports = router;