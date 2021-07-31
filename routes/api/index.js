const router = require('express').Router();

const classRoutes = require('./class-routes');
const originRoutes = require('./origin-routes');
const profileRoutes = require('./profile-routes');
const raceRoutes = require('./race-routes');

router.use('/class', classRoutes);
router.use('/origin', originRoutes);
router.use('/profile', profileRoutes);
router.use('/race', raceRoutes);

module.exports = router;
