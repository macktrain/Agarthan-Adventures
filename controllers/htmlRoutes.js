const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
<<<<<<< HEAD
router.get('/', (req,res) => {
  res.render('homepage');
})
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });
//     const users = userData.map((project) => project.get({ plain: true }));
//     res.render('homepage', {
//       users,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
router.get('/login', (req, res) => {
=======


router.get('/', (req,res) => {
  res.render('homepage');
  
  if (res.ok) {
    console.log('At the homepage')
  } else {
    console.log('Something went wrong going to the homepage')
  }
});

router.get('/login', async (req, res) => {
>>>>>>> a82dd3ec8c1ad995dd5770b6df11e71758efd564
  if (req.session.logged_in) {
    res.redirect('/gameMenu');
    return;
  }
  res.render('login');
});
<<<<<<< HEAD
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
=======

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('gameMenu');
    return;
  }
  res.render('signup');
});

router.get('/gameMenu', (req,res) => {
  res.render ('gameMenu');
});

router.get('/characterBuild', (req,res) => {
  res.render ('characterBuild');
});

router.get('/characterMenu', (req,res) => {
  res.render ('characterMenu');
});

router.get('/characterView', (req,res) => {
  res.render ('characterView');
});


module.exports = router;
>>>>>>> a82dd3ec8c1ad995dd5770b6df11e71758efd564
