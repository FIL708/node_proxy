const errorHandler = (err, req, res, next) => {
  if (err) {
    console.error(err);

    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    return res.status(statusCode).render("pages/error", { statusCode, message });
  }

  next();
};

module.exports = errorHandler;
