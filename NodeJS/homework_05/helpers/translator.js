const { messagesDictionary } = require('../dictionaries');

module.exports = {
    /**
     *
     * @param {String} code
     * @param {String} lang
     * @returns {*}
     */
    getTranslation: (code, lang) => (
        // eslint-disable-next-line no-nested-ternary
        messagesDictionary[code] ? messagesDictionary[code][lang] : (
            code.length > 0 ? code : messagesDictionary.UNKNOWN_ERROR[lang]
        )
    )
};
