const router = require('express').Router();

const { usersController } = require('../controllers');
const { authMiddleware, usersMiddleware } = require('../middlewares');

router.get('/', usersController.getAllUsers);

router.post('/create', usersMiddleware.isNewUserValid, usersController.createUser);

// user should be authorized
router.route('/:userId')
    .all(authMiddleware.isAuthorized)
    .delete(usersMiddleware.isUserIdValid, usersController.deleteUser);

router.route('/:userId')
    .all(authMiddleware.isAuthorized)
    .get(usersMiddleware.isUserFieldValid, usersController.getUser);

module.exports = router;
