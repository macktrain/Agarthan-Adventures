const router = require('express').Router();
const { User, Character } = require('../../models');

// The `/api/user` endpoint

//Find user by email
router.get('/:email', async (req, res) => {
  try {
    const emailNameData = await User.findOne(req.params.email, {
      include: [
        { model: Character, where: {'user.id': 'character.id'}  },
      ],
    });

    if (!emailNameData) {
      res.status(404).json({ message: `The player with email ${req.params.email} is not available.` });
      return;
    }
    res.json(emailNameData);
    
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

//login with email.pwd combo
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne(req.params.email, {
      include: [
        { model: Character, where: {'user.id': 'character.id'}  },
      ],
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ 
        user: userData, 
        message: 'You are now logged in!',
        logged_in: true
      });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// create a new user
router.post('/', async (req, res) => {
  try {
    const newUserData = await User.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newUserData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

//Delete user by email
//This delete will cascade delete the respective character as well.
router.delete('/:email', (req, res) => {
  User.destroy(
  {
    where: {
      email: req.params.email,
    },
  })
  .then((characterDeleteData) => {
    res.json(characterDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
