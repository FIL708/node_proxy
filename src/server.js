const express = require("express");
const config = require("config");
const nunjucks = require("nunjucks");
const router = require("./routes");
const errorHandler = require("./middleware/error-handler.middleware.js");

const PORT = config.get("PORT");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app
  .use("/", router)
  .use(errorHandler)
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
