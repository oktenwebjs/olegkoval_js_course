const jwt = require('jsonwebtoken');

const { authValidators } = require('../validators');
const { Auth, User } = require('../database/models');
const { httpCodes } = require('../dictionaries');
const { Password, Translator } = require('../helpers');
const { ErrorWithStatus } = require('../errors');

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

    _checkAccessToken: async (req) => {
        if (!req.get(process.env.HEAD_AUTHORIZATION)) {
            throw new Error('ACCESS_TOKEN_IS_NOT_VALID');
        }

        // remove Bearer if we have it in Authorization field
        const access_token = (
            req.get(process.env.HEAD_AUTHORIZATION).indexOf('Bearer ') !== -1
                ? req.get(process.env.HEAD_AUTHORIZATION).split(' ')[1]
                : req.get(process.env.HEAD_AUTHORIZATION)
        );

        if (!jwt.verify(access_token, process.env.OAUTH_ACCESS_TOKEN_KEY)) {
            throw new Error('ACCESS_TOKEN_IS_NOT_VALID');
        }

        const token = await Auth.findOne({ access_token });

        if (!token) {
            throw new Error('ACCESS_TOKEN_IS_NOT_VALID');
        }

        return token;
    },

    /**
     * Check if login credentials are valid
     * @param req
     * @param res
     * @param next
     */
    isLoginValid: async (req, res, next) => {
        try {
            module.exports._validate(authValidators.authLoginValidator, req.body);

            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user) {
                throw new Error('WRONG_LOGIN_PASSWORD');
            }

            const passCheck = await Password.compare(password, user.password);

            if (!passCheck) {
                throw new Error('WRONG_LOGIN_PASSWORD');
            }

            req.body = { ...req.body, userId: user.id };

            next();
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.BAD_REQUEST)
            );
        }
    },

    isAccessTokenValid: async (req, res, next) => {
        try {
            const token = await module.exports._checkAccessToken(req);

            req.params.user = token._user_id;

            next();
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.UNAUTHORIZED)
            );
        }
    },

    isRefreshTokenValid: async (req, res, next) => {
        try {
            const { refresh_token } = req.body;

            if (!jwt.verify(refresh_token, process.env.OAUTH_REFRESH_TOKEN_KEY)) {
                throw new Error('REFRESH_TOKEN_IS_NOT_VALID');
            }

            const token = await Auth.findOne({ refresh_token });

            if (!token) {
                throw new Error('REFRESH_TOKEN_IS_NOT_VALID');
            }

            req.body.userId = token._user_id.id;

            next();
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.UNAUTHORIZED)
            );
        }
    },

    isAuthorized: async (req, res, next) => {
        try {
            const token = await module.exports._checkAccessToken(req);

            // check if this request via "userId" field
            const userId = req.body.userId || req.params.userId;

            if (!userId || userId.toString() !== token._user_id.id.toString()) {
                throw new Error('ACCESS_TOKEN_IS_NOT_VALID');
            }

            next();
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.UNAUTHORIZED)
            );
        }
    }
};
