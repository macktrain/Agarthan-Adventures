const router = require('express').Router();

const classRoutes = require('./class-routes');
const characterRoutes = require('./character-routes');
const raceRoutes = require('./race-routes');
const userRoutes = require('./user-routes');

router.use('/class', classRoutes);
router.use('/character', characterRoutes);
router.use('/race', raceRoutes);
router.use('/user', userRoutes);

module.exports = router;
