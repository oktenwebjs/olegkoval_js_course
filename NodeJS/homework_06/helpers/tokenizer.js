const jwt = require('jsonwebtoken');

module.exports = () => {
    const access_token = jwt.sign({}, process.env.OAUTH_ACCESS_TOKEN_KEY, { expiresIn: '30m' });
    const refresh_token = jwt.sign({}, process.env.OAUTH_REFRESH_TOKEN_KEY, { expiresIn: '5d' });

    return {
        access_token,
        refresh_token
    };
};
