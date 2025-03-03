const express = require('express');
const router = express.Router();
const authRoute = require('./auth');
const userRoute = require('./user');
const issuesRoute = require('./issue-forms');
const ContactRoute = require('./contactform');
const AdminRoute = require('./admin');

router.use('/v1/auth', authRoute);
router.use('/v1/contact', ContactRoute);


router.use('/v1/info', userRoute);
router.use('/v1/issues', issuesRoute);
router.use('/v1/admin', AdminRoute);


module.exports = router;