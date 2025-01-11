const express = require('express');
const { songRequest } = require('../controllers/songRequest.controllers')
const router = express.Router();

router.get('/songRequest/', songRequest);

module.exports = router;