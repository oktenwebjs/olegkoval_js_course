const MD5 = require('crypto-js/md5');
const { User, UserAddress } = require('../database/models/index');

module.exports = {
    users: [],

    /**
     * Get list of all users
     * @returns {*}
     */
    getAllUsers: () => User.find().populate('address'),

    /**
     * Get user by email or name from Db
     * @param userField - string, it's a name or email fields to load a user
     * @returns {*}
     */
    getUser: async (userField) => {
        const user = await User.findOne({
            $or: [
                { email: userField },
                { firstname: userField },
                { lastname: userField }
            ]
        }).populate('address');

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        return user;
    },

    /**
     * Login user
     * @param data - object
     * @returns {*}
     */
    loginUser: async (data) => {
        const user = await User.findOne({ email: data.email });

        if (!user) {
            throw new Error('USER_NOT_FOUND');
        }

        if (user.password !== MD5(data.password).toString()) {
            throw new Error('LOGIN_WRONG_PASSWORD');
        }

        return user;
    },

    /**
     * Create new user
     * @param data - object
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

        const passwordHash = MD5(password).toString();

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
     * Delete existed new user
     * @param userId - integer
     * @returns {Promise<boolean>}
     */
    deleteUser: async (userId) => {
        await User.findByIdAndRemove(userId, (err) => {
            if (err) {
                throw new Error(err.message);
            }
        });

        return true;
    }
};
