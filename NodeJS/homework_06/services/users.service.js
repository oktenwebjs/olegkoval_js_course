const { Password } = require('../helpers');
const { User, UserAddress } = require('../database/models/index');

module.exports = {
    users: [],

    /**
     * Get list of all users
     * @returns {*}
     */
    getAllUsers: () => User.find(),

    /**
     * Get user by email or firstname or lastname from Db
     * @param {String} userId
     * @returns {Promise<*>}
     */
    getUser: async (userId) => {
        const user = await User.findOne({ _id: userId });

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        return user;
    },

    /**
     * Create new user
     * @param {Object} data
     * @returns {Promise<boolean>}
     */
    createUser: async (data) => {
        const {
            firstname, lastname, email, password, street, city, zipcode, country
        } = data;

        const userExists = await User.findOne({ email });

        if (userExists) {
            throw new Error('USER_ALREADY_EXISTS');
        }

        const passwordHash = await Password.hash(password);

        // add user into collection
        await UserAddress.create({
            street,
            city,
            zipcode,
            country
        }, (err, address) => {
            if (err) {
                throw new Error(err.message);
            }

            User.create({
                firstname,
                lastname,
                email,
                password: passwordHash,
                address: [address._id]
            }, (err1) => {
                if (err1) {
                    throw new Error(err1.message);
                }
            });
        });

        return true;
    },

    /**
     * Delete existed user
     * @param {String} userId
     * @returns {Promise<boolean>}
     */
    deleteUser: async (userId) => {
        await User.findByIdAndRemove(userId, (err, user) => {
            if (err) {
                throw new Error(err.message);
            }

            if (user !== null) {
                const { address } = user;

                UserAddress.deleteMany({ _id: { $in: address } }, (err1) => {
                    if (err1) {
                        throw new Error(err1.message);
                    }
                });
            }
        });

        return true;
    }
};
