export default class ApiService {
    _baseUrl = `https://jsonplaceholder.typicode.com/`;

    _getResource = async (path) => {
        const result = await fetch(`${this._baseUrl}${path}`);

        if (!result.ok) {
            throw new Error(`Can not fetch URL "${this._baseUrl}${path}". Error: ${result.status}`);
        }

        return result.json();
    }

    getUsers = async () => {
        const users = await this._getResource('users');
        return users;
    }

    getUserDetails = async (id) => {
        const userDetails = await this._getResource(`users/${id}`);
        return userDetails;
    }

    getUserPosts = async (id) => {
        const userDetails = await this._getResource(`posts?userId=${id}`);
        return userDetails;
    }
}