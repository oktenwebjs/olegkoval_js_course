const router = require('express').Router();
const path = require('path');

const UsersController = require(path.join('..', 'controllers', 'users.controller'));
const UsersMiddleware = require(path.join('..', 'middlewares', 'users.middleware'));

router.get('/', (req, res) => {
    UsersController.getAllUsers(req, res);
})

router.post('/login', (req, res) => {
    UsersController.loginUser(req, res);
})

router.post('/create', UsersMiddleware.isNewUserValid, (req, res) => {
    UsersController.createUser(req, res);
})

router.delete('/:userId', UsersMiddleware.isUserIdValid, (req, res) => {
    UsersController.deleteUser(req, res);
})

router.get('/:userField', UsersMiddleware.isUserFieldValid, (req, res) => {
    UsersController.getUser(req, res);
})

module.exports = router;