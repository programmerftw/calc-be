const express = require('express');
const router = express.Router();
const multer = require('multer');
const { run } = require('../controllers/calculatorController');

// Set up multer for handling image uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Define route for POST request
router.post('/', upload.single('image'), run);

module.exports = router;
