const { UsersService } = require('../services');
const { Translator } = require('../helpers');
const { httpCodes } = require('../dictionaries');

module.exports = {
    getAllUsers: async (req, res) => {
        try {
            res.json(await UsersService.getAllUsers());
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message));
        }
    },

    getUser: async (req, res) => {
        try {
            const { userId } = req.params;

            res.json(await UsersService.getUser(userId));
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message));
        }
    },

    createUser: async (req, res) => {
        try {
            await UsersService.createUser(req.body);

            res.status(httpCodes.CREATED).json(Translator.getTranslation('USER_IS_CREATED'));
        } catch (err) {
            res.status(httpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message));
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
