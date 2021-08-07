const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const exerciseRoutes = require('./exerciseRoutes');

// router.use('/users', userRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/category', categoryRoutes);

module.exports= router;