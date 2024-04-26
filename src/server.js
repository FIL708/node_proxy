const path = require("path");
const express = require("express");
const config = require("config");
const nunjucks = require("nunjucks");
const router = require("./routes");
const errorHandler = require("./middleware/error-handler.middleware.js");
const notFound = require("./middleware/not-found.middleware.js");

const PORT = config.get("PORT");
const app = express();

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app
  .set("view engine", "njk")
  .use(express.static(path.join(__dirname, "public")))
  .use("/", router)
  .use(errorHandler)
  .use(notFound)
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
