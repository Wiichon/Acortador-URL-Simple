const express = require('express');
const router = express.Router();
const urlController = require('../controllers/controlladorUrls');

router.post('/shorten', urlController.createShortUrl);
router.get('/', urlController.getAllUrls);

module.exports = router;