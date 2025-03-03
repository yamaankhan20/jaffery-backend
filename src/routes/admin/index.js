const express = require('express');
const router = express.Router();
const AdminController = require('../../controllers/AdminController');


router.get('/get-business-network', AdminController.get_business_network);
router.get('/get-all-business-network', AdminController.get_all_business_network);
router.get('/approve-business-network', AdminController.approve_business_network);
router.get('/reject-business-network', AdminController.reject_business_network);

module.exports = router;
