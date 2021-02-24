const MessagesDictionary = require('./messages.dictionary.enum');

module.exports = {
    getTranslation: (code, lang) => {
        return (MessagesDictionary[code] ? MessagesDictionary[code][lang] : MessagesDictionary['UNKNOWN_ERROR'][lang])
    }
}