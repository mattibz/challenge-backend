const express = require('express');
const { sendEmailController } = require('../controllers/sendEmailController');

const router = express.Router();

router.post('/send-email', sendEmailController);

module.exports = router;