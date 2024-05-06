const dayjs = require('dayjs');

const Joi = require('joi').extend(require('@joi/date'));

const maxDaysValidator = (value, helpers) => {
    const start = dayjs(helpers.state.ancestors[0].start_date);
    const end = dayjs(value);

    if (end.diff(start, 'day') > 7) {
        return helpers.message(
            "Difference between end_date and start_date can't be bigger than 7 days"
        );
    }
};

const meteorsQuerySchema = Joi.object({
    start_date: Joi.date().max('now').format(['YYYY-MM-DD']).required(),
    end_date: Joi.date()
        .max('now')
        .min(Joi.ref('start_date'))
        .format(['YYYY-MM-DD'])
        .allow(Joi.ref('start'))
        .custom(maxDaysValidator),
    count: Joi.boolean(),
    were_dangerous_meteors: Joi.boolean()
});

module.exports = { meteorsQuerySchema };
