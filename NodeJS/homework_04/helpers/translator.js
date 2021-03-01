const MessagesDictionary = require('../dictionaries/messages.dictionary.enum');

module.exports = {
    getTranslation: (code, lang) => (
        // eslint-disable-next-line no-nested-ternary
        MessagesDictionary[code] ? MessagesDictionary[code][lang] : (
            code.length > 0 ? code : MessagesDictionary.UNKNOWN_ERROR[lang]
        )
    )
};
