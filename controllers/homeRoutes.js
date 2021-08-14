const router = require('express').Router();
const { Category, User, Exercise, Routine} = require('../models');

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    // if (req.session.logged_in) {
    //   res.redirect('/');
    //   return;
    // }
    res.render('login');
  });
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Exercise,
        attributes: ['name', 'category_id']
      }]
    });
    const userData = await User.findAll({
      attributes:['name', 'focus_group']
    })
    const users = userData.map((user) => user.get({plain:true}));
    const cats = categoryData.map((cat) =>  cat.get({ plain: true }));
    console.log(cats);
    res.render('homepage', {cats});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/routines', async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(1, {
      attributes: { exclude: ['password'] },
    });
    const routineData = await Routine.findAll({
      include: [{
        model: User,
        attributes: ['name',]
      }]
    });
    const routines = routineData.map((routine) => routine.get({ plain: true }));

    const user = userData.get({ plain: true });

    res.render('createroutines', {
      ...user, routines,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/routines/:id', async (req, res) => {
  try {
    const routineData = await Routine.findByPk(req.params.id, {
      include: [{
        model: User,
        attributes: ['name']
    }
]
})

    const routine = routineData.get({ plain: true });
    console.log(routine);

    res.render('routinepage', {routine});
  } catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;