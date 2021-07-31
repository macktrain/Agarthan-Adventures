const router = require('express').Router();
const { Class, Origin, Profile, Race } = require('../../models');

// The `/api/profile` endpoint

// find all profiles
//TYPICALLY this would be difficult with a multitude of profiles
router.get('/', async (req, res) => {
    try {
      const profileData = await Profile.findAll({
        include: [
          { model: Class },
          { model: Origin },
          { model: Race },
        ],
      });
      res.json(profileData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

router.get('/:id', async (req, res) => {
  // find one profile by its `id` value
    try {
      const profileIdData = await Profile.findByPk(req.params.id, {
        include: [
          { model: Class },
          { model: Origin },
          { model: Race },
        ],
      });

      if (!profileIdData) {
        res.status(404).json({ message: `The profile with id# ${req.params.id} is not available.` });
        return;
      }
      res.json(categoryDetail);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

//Find profile by players unique profile name
router.get('/:name', async (req, res) => {
    try {
      const profileIdData = await Profile.findByPk(req.params.name, {
        include: [
          { model: Class },
          { model: Origin },
          { model: Race },
        ],
      });

      if (!profileIdData) {
        res.status(404).json({ message: `The profile player name ${req.params.name} is not available.` });
        return;
      }
      res.json(profileIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create a new profile
router.post('/', async (req, res) => {
  try {
    const newProfileData = await Profile.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newProfileData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

//Update a profile by name
router.put('/:name', (req, res) => {  
  Profile.update(
    {
      // Update these record fields with respective req.body element
      profile_name: req.body.profile_name,
      profile_wins: req.body.profile_wins,
      profile_matchWins: req.body.profile_matchWins,
      profile_attack: req.body.profile_attack,
      profile_defense: req.body.profile_defense,
      profile_class: req.body.profile_class,
      profile_origin: req.body.profile_origin,
      profile_race: req.body.profile_race,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        profile_name: req.params.name,
      },
    }
  )
    .then((profileUpdatedData) => {
      // Sends the updated book as a json response
      res.json(profileUpdatedData);
    })
    .catch((err) => res.json(err));
});

//Delete player by name
router.delete('/:name', (req, res) => {
  Profile.destroy(
  {
    where: {
      profile_name: req.params.profile_name,
    },
  })
  .then((profileDeleteData) => {
    res.json(profileDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
