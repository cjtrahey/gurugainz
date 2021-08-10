const Category = require('./category');
const Exercise = require('./exercise');
const User = require('./User');
const Routine = require('./Routine')

Exercise.belongsTo(Category, {
    foreignKey: "category_id"
});

Category.hasMany(Exercise, {
    foreignKey: "id"
});

Routine.belongsTo(User, {
    foreignKey: "creator_id"
});



module.exports = { User, Exercise, Category, Routine };
