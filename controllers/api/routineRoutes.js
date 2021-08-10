const router = require('express').Router();
const { User, Routine } = require('../../models');

// router.post("/",  async (req, res) => {
//     try {
//         const newRoutine = await Routine.create({
//           ...req.body,
//           creator_id: req.session.user_id,
         
//         });
    
//         res.status(200).json(newRoutine);
//       } catch (err) {
//         res.status(400).json(err);
//       }
//   });
router.get('/', async (req, res) => {
    const routineData = await Routine.findAll({
        include: [{
            model: User,
            attributes: ['id', 'name']
        }]
    });
    res.status(200).json(routineData)
  })

  router.post("/", async (req, res) => {
    try {
        const newRoutine = await Routine.create({
          ...req.body,
          // creator_id: req.session.user_id ***this gets updated with relevant info from passport***
          
         
        });
    
        res.status(200).json(newRoutine);
      } catch (err) {
        res.status(400).json(err);
      }
  });

  router.get('/:id', async (req, res) => {
    try {
      const routineData = await Routine.findByPk(req.params.id);
      res.status(200).json(routineData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', async (req, res) => {
    try {
      const routineData = await Routine.update(req.body, {
        where: {
          id: req.params.id,
          // creator_id: req.session.user_id,
        },
      });
      if (!routineData[0]) {
        res.status(404).json({ message: 'No routine with this id!' });
        return;
      }
      res.status(200).json(routineData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id',  async (req, res) => {
    try {
      const routineData = await Routine.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!routineData) {
        res.status(404).json({ message: 'No routine found with this id!' });
        return;
      }
  
      res.status(200).json(routineData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  module.exports = router;