const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req,res) => {
  res.render('homepage');
  
  if (res.ok) {
    console.log('At the homepage')
  } else {
    console.log('Something went wrong going to the homepage')
  }
});

router.get('/login', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/gameMenu');
    return;
  }
  res.render('login');
});

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

router.get('/battle', (req,res) => {
  res.render ('battle');
})

router.get('/tutorial', (req,res) => {
  res.render ('tutorial');
})

module.exports = router;
