const express = require('express');
const router = express.Router();
const ContactForm = require('../../controllers/ContactformController');

router.post('/contact-form', ContactForm.contact_form);
router.get('/get-contact-form', ContactForm.get_contact_form);

module.exports = router;
