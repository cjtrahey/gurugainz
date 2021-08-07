const router = require('express').Router();
const { Category, Exercise } = require('../../models');

router.get('/', async (req, res) => {
  const categoryData = await Category.findAll();
  res.status(200).json(categoryData)
})

router.get('/:id', async (req,res) =>{
  const categoryData = await Category.findByPk(req.params.id,{
    include: [{model: Exercise}]
  })
  
  res.status(200).json(categoryData)
});

router.post('/',  async (req, res) => {
  try {
    const newcategory = await Category.create({
      ...req.body,
     
    });

    res.status(200).json(newcategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
