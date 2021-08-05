const { Category } = require('../models');


const categoryData = [
    {
        name: "Abs"
    },
    {
        name: "Arms"
    },
    {
        name: "Back"
    },
    {
        name: "Calves"
    },
    {
        name: "Chest"
    },
    {
        name: "Legs"
    },
    {
        name: "Shoulders"
    },
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories