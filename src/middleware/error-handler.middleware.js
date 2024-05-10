const logger = require('../../utils/logger.js');

const errorHandler = (err, req, res, next) => {
    if (err) {
        const statusCode = err.status || 500;
        const message = err.message || 'Internal Server Error';

        logger.error(err);

        return res
            .status(statusCode)
            .render('pages/error', { statusCode, message });
    }

    next();
};

module.exports = errorHandler;
