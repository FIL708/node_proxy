const { Router } = require("express");
const meteorsController = require("../controllers/meteors.controllers.js");
const { queryValidation } = require("../middleware/validation.middleware.js");
const { meteorsQuerySchema } = require("../validators/meteors.validators.js");

module.exports = Router()
  .get("/", meteorsController.getForm)
  .get("/data", queryValidation(meteorsQuerySchema), meteorsController.getMeteors);
