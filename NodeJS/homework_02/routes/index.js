const express = require('express');
const path = require('path');
const router = express.Router();
const {user} = require(path.join(__dirname, '..', 'modules', 'User'));

router.get('/', (req, res) => {
    res.render('homepage', {home_active: true});
});

router.get('/users/login', (req, res) => {
    res.render('login');
});

router.post('/users/login', (req, res) => {
    try {
        const {id} = user.login(req.body);
        res.redirect(`/users/${id}`);
    } catch (e) {
        res.render('login', {
            errorMsg: e.toString(),
            userData: req.body
        });
    }
});

router.get('/users/create', (req, res) => {
    res.render('create', {create_active: true, userData: {}});
});

router.post('/users/create', (req, res) => {
    try {
        user.create(req.body);
        res.redirect('/users');
    } catch (e) {
        res.render('create', {
            errorMsg: e.toString(),
            userData: req.body
        });
    }
});

router.get('/users/:userId', (req, res) => {
    const {userId} = req.params;
    const userData = user.getUserById(userId);
    res.render('userDetails', {
        user: userData,
        errorMsg: (!userData ? 'User with this ID not exists.' : false)
    });
});

router.get('/users', (req, res) => {
    res.render('usersList', {users_active: true, users: user.getAllUsers()});
});

module.exports = router;