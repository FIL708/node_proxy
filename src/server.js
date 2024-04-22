const express = require("express");
const config = require("config");
const nunjucks = require("nunjucks");
const router = require("./routes");
const errorHandler = require("./middleware/error-handler.middleware.js");

const PORT = config.get("PORT");
const app = express();

nunjucks.configure("src/views", {
    autoescape: true,
    express: app,
});

app.set("view engine", "njk")
    .use("/", router)
    .get("/", (req, res) => res.render("pages/home", { title: "HOME" }))
    .use(errorHandler)
    .listen(PORT, () => console.log(`Server started at: ${PORT}`));
