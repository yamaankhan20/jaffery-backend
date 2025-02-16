const express = require('express');
const router = express.Router();
const authRoute = require('./auth');
const userRoute = require('./user');
const issuesRoute = require('./issue-forms');
const ContactRoute = require('./contactform');

router.use('/v1/auth', authRoute);
router.use('/v1/contact', ContactRoute);


router.use('/v1/info', userRoute);
router.use('/v1/issues', issuesRoute);


module.exports = router;