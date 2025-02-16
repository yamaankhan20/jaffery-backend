const express = require('express');
const router = express.Router();
const ContactForm = require('../../controllers/ContactformController');

router.post('/contact-form', ContactForm.contact_form);

module.exports = router;
