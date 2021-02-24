const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const pathToDb = path.join(__dirname, '..', 'databases', 'users.json');

const DB = require(pathToDb);

module.exports = {
    users: [],

    /**
     * Get list of all users
     * @returns {*}
     */
    getAllUsers: async () => {
        const users = await readFile(pathToDb);

        return JSON.parse(users.toString());
    },

    /**
     * Get user by id from Db
     * @param userField - string, it's a name or email fields to load a user
     * @returns {*}
     */
    getUser: (userField) => {
        const user = DB.find(user => user.email === userField || user.name === userField);

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
        const userEntity = DB.find(elm => elm.email === user.email);

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
        if (DB.find(elm => elm.email === user.email)) {
            throw new Error('USER_ALREADY_EXISTS');
        }

        // remove 'preferLang' key from User entity
        if ('preferLang' in user) {
            delete user.preferLang;
        }

        // set autoincrement ID for new user
        user.id = (DB.length + 1).toString();

        DB.push(user);

        return await writeFile(pathToDb, JSON.stringify(DB));
    },

    /**
     * Delete existed new user
     * @param userId - integer
     */
    deleteUser: async (userId) => {
        const userIndex = DB.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            throw new Error('USER_NOT_FOUND');
        }

        DB.splice(userIndex, 1);

        return await writeFile(pathToDb, JSON.stringify(DB));
    }
}