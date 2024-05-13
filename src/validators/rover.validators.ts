import Joi from 'joi';

export const roverFormSchema = Joi.object({
    userName: Joi.string().alphanum().required(),
    userId: Joi.string().alphanum().required(),
    apiKey: Joi.string().alphanum().required()
});
