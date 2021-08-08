const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req,res) => {
  res.render('homepage');
})

router.get('/login', async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('gameMenu');
    return;
  }
  res.render('signup');
});


router.get('/characterBuild', (req,res) => {
  res.render ('characterBuild');
})

router.get('/characterMenu', (req,res) => {
  res.render ('characterMenu');
})

router.get('/characterView', (req,res) => {
  res.render ('characterView');
})


module.exports = router;
