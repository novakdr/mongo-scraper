const router = require('express').Router();
const fetchRoutes = require('./fetch');
const titleRoutes = require('./titles');
//const noteRoutes = require('./notes');

router.use('/fetch', fetchRoutes);
router.use('/titles', titleRoutes);
router.use('/notes', titleRoutes);

module.exports = router;