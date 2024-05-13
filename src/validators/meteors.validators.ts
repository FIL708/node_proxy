import dayjs = require('dayjs');
import Joi, { ExternalHelpers } from 'joi';
import JoiDate from '@joi/date';

const JoiE = Joi.extend(JoiDate);

const maxDaysValidator = (value: string, helpers: ExternalHelpers) => {
    const start = dayjs(helpers.state.ancestors[0].start_date);
    const end = dayjs(value);

    if (end.diff(start, 'day') > 7) {
        return helpers.error(
            "Difference between end_date and start_date can't be bigger than 7 days"
        );
    }
};

export const meteorsQuerySchema = JoiE.object({
    start_date: JoiE.date().required().max('now').format(['YYYY-MM-DD']),
    end_date: JoiE.date()
        .required()
        .max('now')
        .min(JoiE.ref('start_date'))
        .allow(JoiE.ref('start'))
        .custom(maxDaysValidator)
        .format(['YYYY-MM-DD']),
    count: JoiE.boolean(),
    were_dangerous_meteors: JoiE.boolean()
});
