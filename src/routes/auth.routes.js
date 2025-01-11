const express = require('express');
const { login, recovery, register } = require('../controllers/login.controllers')
const router = express.Router();

router.get('/login/', login);
router.get('/recovery/', recovery);
router.get('/register/', register);

module.exports = router;