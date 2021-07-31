const router = require('express').Router();

const classRoutes = require('./class-routes');
const profileRoutes = require('./profile-routes');
const raceRoutes = require('./race-routes');

router.use('/class', classRoutes);
router.use('/profile', profileRoutes);
router.use('/race', raceRoutes);

module.exports = router;
