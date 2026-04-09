const express = require('express');
const router = express.Router();
const { generateContent } = require('../controllers/contentController');

// POST /api/content/generate
router.post('/generate', generateContent);

module.exports = router;
