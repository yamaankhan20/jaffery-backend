const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/AuthController');

router.post('/login', AuthController.Login);

router.post('/google-auth', AuthController.Google_login);

router.post('/register', AuthController.Register);
router.post('/business-register', AuthController.Business_Register);

module.exports = router;
