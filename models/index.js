const Category = require('./category');
const Exercise = require('./exercise');
const User = require('./User');

Exercise.belongsTo(Category, {
    foreignKey: "category_id"
});

Category.hasMany(Exercise, {
    foreignKey: "id"
});



module.exports = { User, Exercise, Category };
