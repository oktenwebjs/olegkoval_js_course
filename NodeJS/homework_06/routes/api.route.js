const router = require('express').Router();

const AuthRoute = require('./auth.route');
const UsersRouter = require('./users.route');

router.use('/auth', AuthRoute);
router.use('/users', UsersRouter);

module.exports = router;
