const { Routine } = require('../models');


const routineData = [
    {
        name: "Ab Day",
        body: "15x situps, 20x crunches, 15x leg raises, 1min plank",
        creator_id: 1 //1
    },
    {
        name: "Arm Day",
        body: "20x dumbell curls, 20x preacher curls",
        creator_id: 2  //2
    },
];
const seedRoutines = () => Routine.bulkCreate(routineData);
module.exports = seedRoutines