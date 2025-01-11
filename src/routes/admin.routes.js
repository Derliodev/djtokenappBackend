const express = require('express');
const { getAdmin } = require('../controllers/admin.controllers')
const router = express.Router();

router.get('/getAdmin/', getAdmin);

module.exports = router;