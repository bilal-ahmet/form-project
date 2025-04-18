const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.renderForm);
router.post('/submit', formController.handleForm);

module.exports = router;