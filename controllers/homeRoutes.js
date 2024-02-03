const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.render('homepage', { title: 'Tech Blog | Homepage'})
    } catch (err) {
        res.status(500).json(err);
    };
});

module.exports = router;