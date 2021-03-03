const router = require('express').Router();

const { usersController } = require('../controllers');
const { usersMiddleware } = require('../middlewares');

router.get('/', usersController.getAllUsers);

router.post('/login', usersMiddleware.isLoginValid, usersController.loginUser);

router.post('/create', usersMiddleware.isNewUserValid, usersController.createUser);

router.delete('/:userId', usersMiddleware.isUserIdValid, usersController.deleteUser);

router.get('/:userField', usersMiddleware.isUserFieldValid, usersController.getUser);

module.exports = router;
