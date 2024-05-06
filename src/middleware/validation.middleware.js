const queryValidation = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.query);

    if (error) {
        const err = new Error(
            `ValidationError in request query parameters: ${error.details[0].message}`
        );
        err.status = 400;

        throw err;
    }

    next();
};

const bodyValidation = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
        const err = new Error(
            `ValidationError in request body parameters: ${error.details[0].message}`
        );
        err.status = 400;

        throw err;
    }

    next();
};

module.exports = { queryValidation, bodyValidation };
