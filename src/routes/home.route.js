const { Router } = require("express");

module.exports = Router().get("/", (req, res) => res.render("pages/home"));
