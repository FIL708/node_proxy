const express = require("express");
const config = require("config");
const router = require("./routes");

const PORT = config.get("PORT");

express()
  .use("/", router)
  .listen(PORT, () => console.log(`Server started at: ${PORT}`));
