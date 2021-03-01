const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const pathToDb = '../databases/users.json';

module.exports = {
    // eslint-disable-next-line import/no-dynamic-require
    users: require(pathToDb),

    /**
     * Get list of all users
     * @returns {*}
     */
    getAllUsers: () => module.exports.users,

    /**
     * Get user by email or name from Db
     * @param userField - string, it's a name or email fields to load a user
     * @returns {*}
     */
    getUser: (userField) => {
        // eslint-disable-next-line no-shadow
        const user = module.exports.users.find((user) => user.email === userField || user.name === userField);

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        return user;
    },

    /**
     * Login user
     * @param user - object
     * @returns {*}
     */
    loginUser: (user) => {
        const userEntity = module.exports.users.find((elm) => elm.email === user.email);

        if (!userEntity) {
            throw new Error('USER_NOT_FOUND');
        }

        if (userEntity.password !== user.password) {
            throw new Error('LOGIN_WRONG_PASSWORD');
        }

        return userEntity;
    },

    /**
     * Create new user
     * @param user - object
     * @param user
     * @returns {Promise<boolean>}
     */
    createUser: async (user) => {
        if (module.exports.users.find((elm) => elm.email === user.email)) {
            throw new Error('USER_ALREADY_EXISTS');
        }

        // remove 'preferLang' key from User entity
        if ('preferLang' in user) {
            delete user.preferLang;
        }

        // set autoincrement ID for new user
        user.id = (Math.max(...module.exports.users.map((o) => o.id)) + 1).toString();

        // add user into collection
        module.exports.users.push(user);

        // save collection
        await writeFile(pathToDb, JSON.stringify(module.exports.users));

        return true;
    },

    /**
     * Delete existed new user
     * @param userId - integer
     * @returns {Promise<boolean>}
     */
    deleteUser: async (userId) => {
        const userIndex = module.exports.users.findIndex((user) => user.id === userId);

        if (userIndex === -1) {
            throw new Error('USER_NOT_FOUND');
        }

        // remove user from collection
        module.exports.users.splice(userIndex, 1);

        // save collection
        await writeFile(pathToDb, JSON.stringify(module.exports.users));

        return true;
    }
};
