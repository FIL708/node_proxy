const errorHandler = (err, req, res, next) => {
  if (err) {
    console.error(err)

    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).json({error: message})
  }

  next();
};

module.exports = errorHandler;
