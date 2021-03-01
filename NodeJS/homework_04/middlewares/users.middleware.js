const Translator = require('../helpers/translator');
const HttpCodes = require('../dictionaries/httpCodes.enum');

module.exports = {
    isUserIdValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            // eslint-disable-next-line no-shadow
            const userId = (({ params: { userId } }) => userId)(req);

            if (!userId.match(/^[a-zA-Z0-9]+$/g)) {
                throw new Error('IS_NOT_VALID_USER_ID');
            }

            next();
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    /**
     * Check if user field by which we try to load it is valid
     * @param req
     * @param res
     * @param next
     */
    isUserFieldValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            const { userField } = req.params;

            if (userField.length === 0 || !userField.match(/^[\w@_.]+$/i)) {
                throw new Error('KEY_FIELD_IS_NOT_VALID');
            }

            next();
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    isNewUserValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            const mandatoryFields = [
                'firstname',
                'lastname',
                'email',
                'password'
            ];

            for (const key of mandatoryFields) {
                if (!(key in req.body)) {
                    throw new Error(`MISSING_MANDATORY_FIELD_${key.toUpperCase()}`);
                }

                if (req.body[key].length === 0) {
                    throw new Error(`EMPTY_MANDATORY_FIELD_${key.toUpperCase()}`);
                }
            }

            next();
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    },

    isLoginValid: (req, res, next) => {
        const { preferLang = 'en' } = req.body;

        try {
            const mandatoryFields = [
                'email',
                'password'
            ];

            for (const key of mandatoryFields) {
                if (!(key in req.body)) {
                    throw new Error(`MISSING_MANDATORY_FIELD_${key.toUpperCase()}`);
                }

                if (req.body[key].length === 0) {
                    throw new Error(`EMPTY_MANDATORY_FIELD_${key.toUpperCase()}`);
                }
            }

            next();
        } catch (err) {
            res.status(HttpCodes.BAD_REQUEST).json(Translator.getTranslation(err.message, preferLang));
        }
    }
};
