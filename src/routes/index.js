const { Router } = require("express");
const meteors = require("./meteors.route.js");
const home = require("./home.route.js");
const rover = require("./rover.route.js");

module.exports = Router()
  .use("/", home)
  .use("/meteors", meteors)
  .use("/rover", rover);
