const { Router } = require("express");
const roverController = require("../controllers/rover.controller.js");

module.exports = Router()
  .get("/", roverController.getRoverPage)
  .post("/", roverController.postUserData);
