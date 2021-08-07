const { Category } = require('../models');


const categoryData = [
    {
        name: "Abs" //1
    },
    {
        name: "Arms" //2
    },
    {
        name: "Back" //3
    },
    {
        name: "Calves" //4
    },
    {
        name: "Chest" //5
    },
    {
        name: "Legs" //6
    },
    {
        name: "Shoulders" //7
    },
    {
        name: "Cardio" //8
    }
];
const seedCategories = () => Category.bulkCreate(categoryData);
module.exports = seedCategories