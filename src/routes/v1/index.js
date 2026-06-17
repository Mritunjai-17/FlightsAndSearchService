const express = require('express');
const controller = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/city', controller.create);
router.delete('/city/:id', controller.destroy);
router.get('/city/:id', controller.get);
router.get('/cities', controller.getAll);
router.patch('/city/:id', controller.update);

router.post('/flights', FlightController.createFlight);


module.exports = router;