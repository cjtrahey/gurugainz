const { response } = require('express');

const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
    res.render('login');
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out')
});

// auth with github
router.get('/github', passport.authenticate('github', {
    scope: ['profile']
}));

// callback route for github to redirect to
router.get('/github/redirect', passport.authenticate('github'), (req, res) => {
    res.send('you reached the callback URI')
});

module.exports = router;