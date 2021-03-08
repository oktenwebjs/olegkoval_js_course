const { Translator } = require('../helpers');
const { httpCodes } = require('../dictionaries');
const { userValidators } = require('../validators');

module.exports = {
    /**
     * Execute validator and init error if needed
     * @param validator
     * @param data
     * @private
     */
    _validate: (validator, data) => {
        const { error } = validator.validate(data);

        if (error) {
            const { type, context, message } = error.details[0];

            // specific fields validation errors
            switch (context.key) {
                case 'userField':
                    throw new Error('KEY_FIELD_IS_NOT_VALID');
                case 'userId':
                    throw new Error('IS_NOT_VALID_USER_ID');
            }

            // default validate errors
            switch (type) {
                case 'string.empty':
                    throw new Error(`EMPTY_MANDATORY_FIELD_${context.key.toUpperCase()}`);
                case 'any.required':
                    throw new Error(`MISSING_MANDATORY_FIELD_${context.key.toUpperCase()}`);
                case 'string.pattern.base':
                    throw new Error(`INCORRECT_MANDATORY_FIELD_${context.key.toUpperCase()}`);
                default:
                    throw new Error(message);
            }
        }
    },

    /**
     * Check if User Id is valid
     * @param req
     * @param res
     * @param next
     */
    isUserIdValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            module.exports._validate(userValidators.userIdValidator, req.params);

            next();
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    /**
     * Check if user field by which we try to load it is valid (email or firstname or lastname)
     * @param req
     * @param res
     * @param next
     */
    isUserFieldValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            module.exports._validate(userValidators.userFieldValidator, req.params);

            next();
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    /**
     * Check if new user fields are valid
     * @param req
     * @param res
     * @param next
     */
    isNewUserValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            module.exports._validate(userValidators.userCreateValidator, req.body);

            next();
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },
};
