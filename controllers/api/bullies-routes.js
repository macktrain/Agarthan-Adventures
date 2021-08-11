const router = require('express').Router();
const { Bullies } = require('../../models');

// The `/api/bullies` endpoint

//TYPICALLY this would be difficult with a multitude of Bulliess
router.get('/', async (req, res) => {
    try {
      const bulliesData = await Bullies.findAll();
      res.json(bulliesData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

router.get('/:id', async (req, res) => {
  // find one Bullies by its `id` value
    try {
      const bulliesIdData = await Bullies.findOne(req.body.id);

      if (!bulliesIdData) {
        res.status(404).json({ message: `The Bully with id# ${req.body.id} is not available.` });
        return;
      }
      res.json(bulliesIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

//Find Bullies by players unique Bullies name
router.get('/:name', async (req, res) => {
    try {
      const bulliesIdData = await Bullies.findOne(req.body.name);

      if (!bulliesIdData) {
        res.status(404).json({ message: `The Bullies player name ${req.body.name} is not available.` });
        return;
      }
      res.json(bulliesIdData);
      
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

module.exports = router;
