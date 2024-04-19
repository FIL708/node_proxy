const { Router } = require("express");
const meteorsController = require("../controllers/meteors.controllers.js");

module.exports = Router().get("/", meteorsController.getMeteors);
