const { Router } = require("express");
const meteors = require("./meteors");

module.exports = Router().use("/meteors", meteors);
