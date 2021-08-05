const router = require('express').Router();
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

//Find Character by players unique Character name
router.get('/:name', async (req, res) => {
    try {
      const userNameData = await User.findByPk(req.params.name, {
        include: [
          { model: Character },
        ],
      });

      if (!userNameData) {
        res.status(404).json({ message: `The Character player name ${req.params.name} is not available.` });
        return;
      }
      res.json(userNameData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create a new Character
router.post('/', async (req, res) => {
  try {
    const newUserData = await Character.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newUserData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

//Update a User by username
router.put('/:name', (req, res) => {  
  Character.update(
    {
      // Update these record fields with respective req.body element
      user_fname: req.body.user_fname,
      user_lname: req.body.user_lname,
      username: req.body.username,
      user_passhash: req.body.user_passhash,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        username: req.params.username,
      },
    }
  )
    .then((characterUpdatedData) => {
      // Sends the updated book as a json response
      res.json(characterUpdatedData);
    })
    .catch((err) => res.json(err));
});

//Delete player by username
//This delete will cascade delete the respective character as well.
router.delete('/:name', (req, res) => {
  Character.destroy(
  {
    where: {
      username: req.params.username,
    },
  })
  .then((characterDeleteData) => {
    res.json(characterDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
