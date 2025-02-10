const express = require('express');
const router = express.Router();

const authRoute = require('./auth');
const userRoute = require('./user');

router.use('/v1/auth', authRoute);

router.use('/v1/info', userRoute)

module.exports = router;