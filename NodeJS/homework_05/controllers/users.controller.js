const UsersService = require('../services/users.service');
const Translator = require('../helpers/translator');
const { httpCodes } = require('../dictionaries');

module.exports = {
    getAllUsers: async (req, res) => {
        const { preferLang = 'en' } = req.body;

        try {
            res.json(await UsersService.getAllUsers());
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    getUser: async (req, res) => {
        const { preferLang = 'en' } = req.body;

        try {
            const { userField } = req.params;

            res.json(await UsersService.getUser(userField));
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    loginUser: async (req, res) => {
        const { preferLang = 'en' } = req.body;

        try {
            await UsersService.loginUser(req.body);

            res.status(httpCodes.LOGIN_SUCCESS).json(Translator.getTranslation('SUCCESS_LOGGED_IN', preferLang));
        } catch (err) {
            res.status(httpCodes.LOGIN_FAILED).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    createUser: async (req, res) => {
        const { preferLang = 'en' } = req.body;

        try {
            await UsersService.createUser(req.body);

            res.status(httpCodes.CREATED).json(Translator.getTranslation('USER_IS_CREATED', preferLang));
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    deleteUser: async (req, res) => {
        const { preferLang = 'en' } = req.body;

        try {
            const { userId } = req.params;

            await UsersService.deleteUser(userId);

            res.status(httpCodes.DELETED).json(Translator.getTranslation('SUCCESS_DELETED', preferLang));
        } catch (err) {
            res.status(httpCodes.DELETE_FAILED).json(Translator.getTranslation(err.message, preferLang));
        }
    }
};
