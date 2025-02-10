const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

router.get('/get-users', UserController.get_all_users);

module.exports = router;
