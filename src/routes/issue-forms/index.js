const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/IssuesController');

router.post('/legal-assistance', UserController.legal_issues);
router.post('/virtual-clinic', UserController.virtual_clinic);
router.post('/professional-network', UserController.professional_network);

module.exports = router;
