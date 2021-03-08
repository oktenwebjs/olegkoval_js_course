const { AuthService } = require('../services');
const { Translator } = require('../helpers');
const { httpCodes } = require('../dictionaries');

module.exports = {
    login: async (req, res) => {
        try {
            const { userId } = req.body;

            const tokens = await AuthService.login(userId);

            res.status(httpCodes.LOGIN_SUCCESS).json(tokens);
        } catch (err) {
            res.status(httpCodes.LOGIN_FAILED).json(Translator.getTranslation(err.message));
        }
    },

    logout: async (req, res) => {
        try {
            const { user } = req.params;

            await AuthService.logout(user);

            res.status(httpCodes.LOGOUT_SUCCESS).json(Translator.getTranslation('SUCCESS_LOGGED_OUT'));
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message));
        }
    },

    refresh: async (req, res) => {
        await module.exports.login(req, res);
    },
};
