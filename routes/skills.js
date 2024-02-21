// routes/skills.js
const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// Index route
router.get('/', skillsController.index);

// Show route
router.get('/:id', skillsController.show);

module.exports = router;
