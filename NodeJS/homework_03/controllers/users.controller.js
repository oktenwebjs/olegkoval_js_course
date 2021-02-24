const path = require('path');

const UsersService = require(path.join('..', 'services', 'users.service'));
const Translator = require(path.join('..', 'dictionaries', 'translator'));
const HttpCodes = require(path.join('..', 'dictionaries', 'httpCodes.enum'));

module.exports = {
    getAllUsers: async (req, res) => {
        const {preferLang = 'en'} = req.body;

        try {
            res.json(await UsersService.getAllUsers());
        } catch (err) {
            console.log(err.message);
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    getUser: (req, res) => {
        const {preferLang = 'en'} = req.body;

        try {
            const {userField} = req.params;

            res.json(UsersService.getUser(userField));
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    loginUser: (req, res) => {
        const {preferLang = 'en'} = req.body;

        try {
            UsersService.loginUser(req.body);

            res.status(HttpCodes.LOGIN_SUCCESS).json(Translator.getTranslation('SUCCESS_LOGGED_IN', preferLang));
        } catch (err) {
            res.status(HttpCodes.LOGIN_FAILED).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    createUser: async (req, res) => {
        const {preferLang = 'en'} = req.body;

        try {
            await UsersService.createUser(req.body);

            res.status(HttpCodes.CREATED).json(Translator.getTranslation('USER_IS_CREATED', preferLang));
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    deleteUser: async (req, res) => {
        const {preferLang = 'en'} = req.body;

        try {
            const {userId} = req.params;

            await UsersService.deleteUser(userId);

            res.status(HttpCodes.DELETED).json(Translator.getTranslation('SUCCESS_DELETED', preferLang));
        } catch (err) {
            res.status(HttpCodes.LOGIN_FAILED).json(Translator.getTranslation(err.message, preferLang));
        }
    }
}