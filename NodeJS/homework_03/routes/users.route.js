const router = require('express').Router();
const path = require('path');

const UsersController = require(path.join('..', 'controllers', 'users.controller'));
const UsersMiddleware = require(path.join('..', 'middlewares', 'users.middleware'));

router.get('/', UsersController.getAllUsers);

router.post('/login', UsersMiddleware.isLoginValid, UsersController.loginUser);

router.post('/create', UsersMiddleware.isNewUserValid, UsersController.createUser);

router.delete('/:userId', UsersMiddleware.isUserIdValid, UsersController.deleteUser);

router.get('/:userField', UsersMiddleware.isUserFieldValid, UsersController.getUser);

module.exports = router;