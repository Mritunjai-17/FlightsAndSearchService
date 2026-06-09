const express = require('express');
const controller = require('../../controllers/city-controller');

const router = express.Router();

router.post('/city', controller.create);

module.exports = router;