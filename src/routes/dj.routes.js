const express = require('express');
const { getDjs } = require('../controllers/dj.controllers')
const router = express.Router();

router.get('/getDjs/', getDjs);

module.exports = router;