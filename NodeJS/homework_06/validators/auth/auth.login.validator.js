const Joi = require('joi');

const { validatorConfig } = require('../../constants');

module.exports = Joi.object({
    email: Joi.string().regex(validatorConfig.EMAIL_REGEXP).required(),
    password: Joi.string().regex(validatorConfig.PASSWORD_REGEXP).required()
});
