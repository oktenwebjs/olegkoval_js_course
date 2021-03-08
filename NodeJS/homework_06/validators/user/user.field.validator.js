const Joi = require('joi');

const { validatorConfig } = require('../../constants');

module.exports = Joi.object({
    userId: Joi.string().regex(validatorConfig.USERFIELD_REGEXP).required()
});
