const { UsersService } = require('../services');
const { Translator } = require('../helpers');
const { httpCodes } = require('../dictionaries');
const { ErrorWithStatus } = require('../errors');

module.exports = {
    getAllUsers: async (req, res, next) => {
        try {
            res.json(await UsersService.getAllUsers());
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.BAD_REQUEST)
            );
        }
    },

    getUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            res.json(await UsersService.getUser(userId));
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.BAD_REQUEST)
            );
        }
    },

    createUser: async (req, res, next) => {
        try {
            await UsersService.createUser(req.body);

            res.status(httpCodes.CREATED).json(Translator.getTranslation('USER_IS_CREATED'));
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.BAD_REQUEST)
            );
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const { userId } = req.params;

            await UsersService.deleteUser(userId);

            res.status(httpCodes.DELETED).json(Translator.getTranslation('SUCCESS_DELETED'));
        } catch (err) {
            next(
                new ErrorWithStatus(Translator.getTranslation(err.message), httpCodes.DELETE_FAILED)
            );
        }
    }
};
