const router = require('express').Router();
const { Bullies } = require('../../models');

// The `/api/bullies` endpoint

//TYPICALLY this would be difficult with a multitude of Characters
router.get('/', async (req, res) => {
    try {
      const characterData = await Bullies.findAll({
        include: [
          { model: Class },
          { model: Race },
        ],
      });
      res.json(CharacterData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

router.get('/:id', async (req, res) => {
  // find one Character by its `id` value
    try {
      const characterIdData = await Character.findByPk(req.params.id, {
        include: [
          { model: Class },
          { model: Race },
        ],
      });

      if (!characterIdData) {
        res.status(404).json({ message: `The Character with id# ${req.params.id} is not available.` });
        return;
      }
      res.json(characterIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

//Find Character by players unique Character name
router.get('/:name', async (req, res) => {
    try {
      const characterIdData = await Character.findByPk(req.params.name, {
        include: [
          { model: Class },
          { model: Race },
        ],
      });

      if (!characterIdData) {
        res.status(404).json({ message: `The Character player name ${req.params.name} is not available.` });
        return;
      }
      res.json(characterIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create a new Character
router.post('/', async (req, res) => {
  try {
    const newCharacterData = await Character.create(req.body);
    // Successful request => error code 200
    res.status(200).json(newCharacterData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

//Update a Character by name
router.put('/:name', (req, res) => {  
  Character.update(
    {
      // Update these record fields with respective req.body element
      caracter_name: req.body.character_name,
      character_health: req.body.character_health,
      character_attack: req.body.character_attack,
      character_defense: req.body.character_defense,
      class_id: req.body.class_id,
      race_id: req.body.race_id,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        character_name: req.params.name,
      },
    }
  )
    .then((characterUpdatedData) => {
      // Sends the updated book as a json response
      res.json(characterUpdatedData);
    })
    .catch((err) => res.json(err));
});

//Delete player by name
router.delete('/:name', (req, res) => {
  Character.destroy(
  {
    where: {
      character_name: req.params.character_name,
    },
  })
  .then((characterDeleteData) => {
    res.json(characterDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
