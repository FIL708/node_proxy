const { Router } = require("express");
const meteors = require("./meteors.route.js");
const home = require("./home.route.js");

module.exports = Router().use("/", home).use("/meteors", meteors);
