const router = require('express').Router();
const { Origin } = require('../../models');

// The `/api/origin` endpoint

// find all origins
router.get('/', async (req, res) => {
  try {
    const originData = await Tag.findAll();
    res.json(originData);
  } catch (e) {
    res.json(e);
    console.log(e);
  }
});

// find a single origin by its `id`
router.get('/:id', async (req, res) => {
  try {
    const originIdData = await Tag.findByPk(req.params.id);
    res.json(originIdData);
  } catch (e) {
      res.json(e);
      console.log (e)
  }
});

module.exports = router;
