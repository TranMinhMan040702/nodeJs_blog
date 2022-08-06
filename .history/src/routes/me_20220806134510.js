const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/:tin-tuc', meController.show);

router.get('/', meController.index);

module.exports = router;
