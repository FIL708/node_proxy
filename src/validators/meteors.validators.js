const Joi = require("joi").extend(require("@joi/date"));

const meteorsQuerySchema = Joi.object({
  start_date: Joi.date().format(["YYYY-MM-DD"]).required(),
  end_date: Joi.date().format(["YYYY-MM-DD"]),
  count: Joi.boolean(),
  were_dangerous_meteors: Joi.boolean(),
});

module.exports = { meteorsQuerySchema };
