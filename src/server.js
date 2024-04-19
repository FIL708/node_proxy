const express = require("express");
const config = require("config");
const router = require("./routes");
const errorHandler = require("./middleware/error-handler.middleware.js");

const PORT = config.get("PORT");

express()
  .use("/", router)
  .use(errorHandler)
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
