const Joi = require('joi');

const { validatorConfig } = require('../../constants');

module.exports = Joi.object({
    userField: Joi.string().regex(validatorConfig.USERFIELD_REGEXP).required()
});
