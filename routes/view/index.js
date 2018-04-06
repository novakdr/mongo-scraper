const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home')
});

router.get('/saved', (req, res) => {
    res.render('saved');
});

module.exports = router;