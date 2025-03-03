const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/IssuesController');

router.post('/legal-assistance', UserController.legal_issues);
router.post('/virtual-clinic', UserController.virtual_clinic);
router.post('/professional-network', UserController.professional_network);
router.post('/business-network', UserController.business_network);
router.post('/get-business-network', UserController.get_business_network);

module.exports = router;
