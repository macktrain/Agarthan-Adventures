const router = require('express').Router();
const { Class, Character, Race } = require('../../models');

// The `/api/character` endpoint

// find all Characters
//TYPICALLY this would be difficult with a multitude of Characters
router.get('/', async (req, res) => {
    try {
      const characterData = await Character.findAll({
        include: [
          { model: Class },
          { model: Race },
        ],
      });
      res.json(characterData);
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

//Update a Character by id
router.put('/:id', (req, res) => {  
  Character.update(
    {
      // Update these record fields with respective req.body element
      caracter_name: req.body.character_name,
      character_xrp: req.body.character_xrp,
      class_id: req.body.class_id,
      race_id: req.body.race_id,
    },
    {
      
      where: {
        id: req.params.id,
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
