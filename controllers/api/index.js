const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const routineRoutes = require('./routineRoutes')
const categoryRoutes = require('./categoryRoutes');
const exerciseRoutes = require('./exerciseRoutes');

// router.use('/users', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/category', categoryRoutes);
router.use('/routines', routineRoutes);
module.exports= router;