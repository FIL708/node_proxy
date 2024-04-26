const dayjs = require("dayjs");
const { Router } = require("express");

module.exports = Router().get("/", (req, res) => {
  return res.render("pages/home", {
    maxDate: dayjs().format('YYYY-MM-DD'),
  });
});
