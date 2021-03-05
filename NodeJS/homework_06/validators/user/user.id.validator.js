const Joi = require('joi');

module.exports = Joi.object({
    userId: Joi.string().alphanum().min(1).required()
});
