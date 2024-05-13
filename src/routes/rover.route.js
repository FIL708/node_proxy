const { Router } = require('express');
const roverController = require('../controllers/rover.controller.js');
const { bodyValidation } = require('../middleware/validation.middleware.js');
const { roverFormSchema } = require('../validators/rover.validators.js');

module.exports = Router()
    .get('/', roverController.getForm)
    .post('/', bodyValidation(roverFormSchema), roverController.postRover);
