const router = require('express').Router();
const { Class } = require('../../models');

// The `/api/class` endpoint

// get all classes
router.get('/', async (req, res) => {
    // find all classes
    try {
      const classData = await Product.findAll();
      res.json(classData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

// get one classes by id
router.get('/:id', async (req, res) => {
    try {
      const classIdData = await Product.findByPk(req.params.id);
      res.json(classIdData);
    } catch (e) {
      res.json(e);
      console.log(e);
    }
});

module.exports = router;
