const { Auth } = require('../database/models');
const { Tokenizer } = require('../helpers');

module.exports = {
    login: async (userId) => {
        const tokens = Tokenizer();

        if (!tokens) {
            throw new Error('TOKENS_NOT_GENERATED');
        }

        // remove current - maybe user decided to login again even if refresh token is not expired
        await Auth.findOneAndRemove({ _user_id: userId });

        // add new
        await Auth.create({ ...tokens, _user_id: userId });

        return tokens;
    },

    logout: async (user) => {
        await Auth.findOneAndRemove({ _user_id: user.id });
    },
};
