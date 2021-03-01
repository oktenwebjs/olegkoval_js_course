const router = require('express').Router();

const UsersRouter = require('./users.route');

router.use('/users', UsersRouter);

module.exports = router;
