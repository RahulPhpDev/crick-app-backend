const express = require('express');

const LoginController = require('../app/Http/Controllers/V1/Auth/LoginController');
const router = express.Router();

router.post('/login', LoginController.login);

module.exports = router;