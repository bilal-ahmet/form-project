const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');

router.get('/', formController.getForm);
router.post('submit', formController.submitForm);

module.exports = router;