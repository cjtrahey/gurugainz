const router = require('express').Router();
const { Exercise } = require('../../models');

router.get('/', async (req, res) => {
    const exerciseData = await Exercise.findAll();
    res.status(200).json(exerciseData)
  });
router.get('/:id', async (req,res) =>{
    const exerciseData = await Exercise.findByPk(req.params.id)
    
    res.status(200).json(exerciseData)
  });
router.put('/:id', async (req, res) => {
    try{
        const exerciseData = await Exercise.update(req.body, {
            where: {
                id: req.params.id
            },
        });
        res.status(200).json(exerciseData);
    }catch (err) {
        res.status(500).json(err)
    }
});
router.post('/',  async (req, res) => {
  try {
    const newExercise = await Exercise.create({
      ...req.body,
    });

    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const exerciseData = await Exercise.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No Exercise found with this id!' });
      return;
    }

    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
