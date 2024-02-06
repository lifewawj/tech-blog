const router = require('express').Router();


// Homepage Route
router.get('/', (req, res) => {
    try {
        res.render('home', { title: 'Tech Blog | Home'})
    } catch (err) {
        res.status(500).json(err);
    };
});

// Dashboard Route
router.get('/dashboard', (req, res) => {
    try {
        res.render('dashboard',{ title: 'Tech Blog | Dashboard'})
    } catch (err) {
        res.status(500).json(err);
    }
});


// Login Route
router.get('/login', (req, res) => {
    try {
        res.render('login', { title: 'Tech Blog | Login'})
    } catch (err) {
        res.status(500).json(err);
    }
});


// Logout Route
router.get('/logout', (req, res) => {
    try {
        res.render('logout',{ title: 'Tech Blog | Logout'})
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;