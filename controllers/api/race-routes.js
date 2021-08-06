const router = require('express').Router();
const {  Race } = require('../../models');

// The `/api/race` endpoint

//Get race data 
router.get('/', async (req, res) => {
    try {
      const raceData = await Race.findAll();
      res.json(raceData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

//Get race data by id
router.get('/:id', async (req, res) => {
    try {
      const raceIdData = await Race.findByPk(req.params.id);

      if (!raceIdData) {
        res.status(404).json({ message: `Race with id# ${req.params.id} is not available.` });
        return;
      }
      res.json(raceIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// create a new race
router.post('/', async (req, res) => {
  try {
    const newRaceData = await Race.create(req.body);
    console.log(req.body);
    // Successful request => error code 200
    res.status(200).json(newRaceData);
  } catch (err) {
    // Cannot understand request => error code 400
    res.status(400).json(err);
  }
});

// update a race by its `id` value
router.put('/:id', (req, res) => {
  
  Race.update(
    {
      // Update these record fields with respective req.body element
      id: req.body.id,
    },
    {
      // Gets the books based on the isbn given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedRaceData) => {
      // Sends the updated book as a json response
      res.json(updatedRaceData);
    })
    .catch((err) => res.json(err));
});

// delete a rac by its `id` value
router.delete('/:id', (req, res) => {
  Race.destroy(
  {
    where: {
      id: req.params.id,
    },
  })
  .then((raceDeleteData) => {
    res.json(raceDeleteData);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
