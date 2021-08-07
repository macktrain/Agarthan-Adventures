const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Character } = require('../../models');

// The `/api/character` endpoint

// find all users
//TYPICALLY this would be difficult with a multitude of Characters
router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [
          { model: Character },
        ],
      });
      res.json(userData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

router.get('/:id', async (req, res) => {
  // find one user by its `id` value
    try {
      const userIdData = await User.findByPk(req.params.id, {
        include: [
          { model: Character },
        ],
      });

      if (!userIdData) {
        res.status(404).json({ message: `The Character with id# ${req.params.id} is not available.` });
        return;
      }
      res.json(userIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

//Find user by email
router.get('/:email', async (req, res) => {
    try {
      const emailNameData = await User.findOne(req.params.email, {
        include: [
          { model: Character },
        ],
      });

      if (!emailNameData) {
        res.status(404).json({ message: `The Character player name ${req.params.email} is not available.` });
        return;
      }
      res.json(emailNameData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});


//Find user by username
router.get('/:username', async (req, res) => {
  try {
    const userNameData = await User.findOne(req.params.username, {
      include: [
        { model: Character },
      ],
    });

    if (!userNameData) {
      res.status(404).json({ message: `The username ${req.params.username} is not available.` });
      return;
    }
    res.json(userNameData);
    
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

// create a new user
router.post('/', async (req, res) => {
  try {
    //need to be able to access the pwd, so must set up access to req.body
    const newUser = req.body;
    //now take the user password and hash it
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
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
  Character.destroy(
  {
    where: {
      username: req.params.email,
    },
  })
  .then((characterDeleteData) => {
    res.json(characterDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
