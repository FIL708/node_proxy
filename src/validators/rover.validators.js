const Joi = require("joi");

const roverFormSchema = Joi.object({
  userID: Joi.string().alphanum().required(),
  apiKey: Joi.string().alphanum().required(),
  userName: Joi.string().alphanum().required(),
});

module.exports = { roverFormSchema };
