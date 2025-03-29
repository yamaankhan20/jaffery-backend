const express = require('express');
const router = express.Router();
const AdminController = require('../../controllers/AdminController');


router.get('/get-business-network', AdminController.get_business_network);
router.get('/get-all-business-network', AdminController.get_all_business_network);
router.post('/approve-business-network', AdminController.approve_business_network);
router.post('/reject-business-network', AdminController.reject_business_network);


router.get('/get-business-group', AdminController.get_business_group);
router.get('/get-all-business-group', AdminController.get_all_business_group);
router.post('/approve-business-group', AdminController.approve_business_group);
router.post('/reject-business-group', AdminController.reject_business_group);


router.post('/delete-user', AdminController.delete_user);
router.post('/delete-ads', AdminController.delete_ads);
router.post('/delete-business', AdminController.delete_business);


module.exports = router;
