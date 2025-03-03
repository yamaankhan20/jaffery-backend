const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

router.get('/get-users', UserController.get_all_users);
router.get('/get-all-users', UserController.get_all_users_to_admin);

module.exports = router;
