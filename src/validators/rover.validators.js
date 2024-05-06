const Joi = require("joi");

const roverFormSchema = Joi.object({
  userName: Joi.string().alphanum().required(),
  userId: Joi.string().alphanum().required(),
  apiKey: Joi.string().alphanum().required(),
});

module.exports = { roverFormSchema };
