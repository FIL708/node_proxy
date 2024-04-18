const { Router } = require("express");
const { getMeteors } = require("../controllers/meteors.controllers");

module.exports = Router().get("/", getMeteors);
