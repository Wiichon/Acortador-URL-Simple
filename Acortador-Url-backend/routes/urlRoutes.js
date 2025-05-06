const express = require('express');
const router = express.Router();
const urlController = require('../controllers/controlladorUrls.js');

router.post('/shorten', urlController.createShortUrl);
router.get('/', urlController.getAllUrls);

module.exports = router;