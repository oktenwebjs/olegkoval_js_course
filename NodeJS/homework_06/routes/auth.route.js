const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware } = require('../middlewares');

router.post('/login', authMiddleware.isLoginValid, authController.login);

router.post('/logout', authMiddleware.isAccessTokenValid, authController.logout);

router.post('/refresh', authMiddleware.isRefreshTokenValid, authController.refresh);

module.exports = router;
