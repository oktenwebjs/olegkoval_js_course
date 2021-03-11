const { AuthService } = require('../services');
const { Translator } = require('../helpers');
const { httpCodes } = require('../dictionaries');
const { ErrorWithStatus } = require('../errors');

module.exports = {
    login: async (req, res, next) => {
        try {
            const { userId } = req.body;

            const tokens = await AuthService.login(userId);

            res.status(httpCodes.SUCCESS).json(tokens);
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.LOGIN_FAILED)
            );
        }
    },

    logout: async (req, res, next) => {
        try {
            const { user } = req.params;

            await AuthService.logout(user);

            res.status(httpCodes.SUCCESS).json(Translator.getTranslation('SUCCESS_LOGGED_OUT'));
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.BAD_REQUEST)
            );
        }
    },

    refresh: async (req, res) => {
        await module.exports.login(req, res);
    },
};
