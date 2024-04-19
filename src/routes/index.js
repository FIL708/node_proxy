const { Router } = require("express");
const meteors = require("./meteors.route.js");

module.exports = Router().use("/meteors", meteors);
