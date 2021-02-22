const fs = require('fs');
const path = require('path');
const MD5 = require("crypto-js/md5");
const dbFilePath = path.join(__dirname, '..', 'users.json');

class User {
    _users = [];

    constructor() {
        this._loadUsersFromDB();
    }

    _loadUsersFromDB() {
        fs.readFile(dbFilePath, (err, data) => {
           if (err) {
               console.log('Can not read a DB file: '+ dbFilePath);
               return;
           }

           this._users = JSON.parse(data);
        });
    }

    _usersCommit() {
        fs.writeFile(dbFilePath, JSON.stringify(this._users), err => {
            if (err) throw err;
        });
    }

    _isUserExists(email = '') {
        for(const user of this._users) {
            if (user.email === email) {
                return user;
            }
        }

        return false;
    }

    getAllUsers() {
        return this._users;
    }

    create(user) {
        try {
            if (this._isUserExists(user.email)) {
                throw new Error(`User with email '${user.email}' already exists.`);
            } else {
                user.id = MD5(user.email).toString()
                this._users.push(user);
                this._usersCommit();
            }
        } catch (e) {
            throw e;
        }
    }

    login(data) {
        try {
            const user = this._isUserExists(data.email);
            if (!user) {
                throw new Error(`User with email '${data.email}' not exists.`);
            } else {
                if (user.password !== data.password) {
                    throw new Error('Wrong user password. Please check credentials.');
                }

                return user;
            }
        } catch (e) {
            throw e;
        }
    }

    getUserById(id) {
        for(const user of this._users) {
            if (user.id === id) {
                return user;
            }
        }

        return false;
    }
}

module.exports = {
    user: new User()
};