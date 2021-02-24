const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToDb = path.join(__dirname, '..', 'databases', 'users.json');

module.exports = {
    users: require(pathToDb),

    /**
     * Get list of all users
     * @returns {*}
     */
    getAllUsers: async () => {
        // if data is not loaded then load it from file
        if (module.exports.users.length === 0) {
            const users = await readFile(pathToDb);

            module.exports.users = JSON.parse(users.toString());
        }

        return module.exports.users;
    },

    /**
     * Get user by id from Db
     * @param userField - string, it's a name or email fields to load a user
     * @returns {*}
     */
    getUser: (userField) => {
        const user = module.exports.users.find(user => user.email === userField || user.name === userField);

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        return user;
    },

    /**
     * Get user by id from Db
     * @param userId - integer
     * @returns {*}
     */
    loginUser: (user) => {
        const userEntity = module.exports.users.find(elm => elm.email === user.email);

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
     * @param user
     */
    createUser: async (user) => {
        if (module.exports.users.find(elm => elm.email === user.email)) {
            throw new Error('USER_ALREADY_EXISTS');
        }

        // remove 'preferLang' key from User entity
        if ('preferLang' in user) {
            delete user.preferLang;
        }

        // set autoincrement ID for new user
        user.id = (module.exports.users.length + 1).toString();

        module.exports.users.push(user);

        return await writeFile(pathToDb, JSON.stringify(DB));
    },

    /**
     * Delete existed new user
     * @param userId - integer
     */
    deleteUser: async (userId) => {
        const userIndex = module.exports.users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            throw new Error('USER_NOT_FOUND');
        }

        module.exports.users.splice(userIndex, 1);

        return await writeFile(pathToDb, JSON.stringify(DB));
    }
}