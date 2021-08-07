const { Exercise } = require('../models');

const exerciseData = [
    {
    name: "2 Handed Kettlebell Swing",
    description: "Two Handed Russian Style Kettlebell swing",
    category_id: 1
    },
    { 
    name: "Axe Hold",
    description: "Grab dumbbells and extend arms to side and hold as long as you can",
    category_id: 2 
    },
    {
    name: "Back Squat",
    description: "Place a barbell in a rack just below shoulder-height. Dip under the bar to put it behind the neck across the top of the back, and grip the bar with the hands wider than shoulder-width apart. Lift the chest up and squeeze the shoulder blades together to keep the straight back throughout the entire movement. Stand up to bring the bar off the rack and step backwards, then place the feet so that they are a little wider than shoulder-width apart. Sit back into hips and keep the back straight and the chest up, squatting down so the hips are below the knees. From the bottom of the squat, press feet into the ground and push hips forward to return to the top of the standing position.",
    category_id: 3
    },
    {
    name: "Box Jumps",
    description: "Stand in front of the box with feet directly under the hips and hands by your side. Explosively jump from a crouched position to the center of the platform.",
    category_id: 4
    },
    {
    name: "Barbell Bench Press",
    description: "Remove the barbell from the rack and lock your elbows out before lowering the bar to your chest. Use a spotter if necessary.",
    category_id: 5
    },
    {
    name: "Barbell Hack Squats",
    description: "Perform leg squats with barbell behind your legs",
    category_id: 6
    },
    {
    name: "Dumbell Lateral Raise",
    description: "Standing, hold dumbbells with your palms facing each other. Keeping your elbows and knees slightly bent, raise your arms out from your sides in wide arcs to about shoulder level. Slowly return to the starting position.",
    category_id: 7
    },
    {
    name: "Run 4 Miles",
    description: "Maintain a steady pace and aim for an 8 minute mile.",
    category_id: 8
    }
];
const seedExercises = () => Exercise.bulkCreate(exerciseData);
module.exports = seedExercises;
    
    