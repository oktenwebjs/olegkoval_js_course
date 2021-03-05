const Joi = require('joi');

const { validatorConfig } = require('../../constants');

module.exports = Joi.object({
    firstname: Joi.string().alphanum().min(validatorConfig.NAME.MIN).max(validatorConfig.NAME.MAX)
        .required(),
    lastname: Joi.string().alphanum().min(validatorConfig.NAME.MIN).max(validatorConfig.NAME.MAX)
        .required(),
    email: Joi.string().regex(validatorConfig.EMAIL_REGEXP).required(),
    password: Joi.string().regex(validatorConfig.PASSWORD_REGEXP).required(),
    street: Joi.string().alphanum().min(validatorConfig.NAME.MIN).required(),
    city: Joi.string().alphanum().min(validatorConfig.NAME.MIN).required(),
    zipcode: Joi.string().regex(validatorConfig.ZIPCODE_REGEXP).required(),
    country: Joi.string().alphanum().min(validatorConfig.NAME.MIN).required()
});
