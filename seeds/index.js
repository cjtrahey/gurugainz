const seedUsers = require('./userseeds');
const seedExercises = require('./exerciseSeeds')
const seedCategories = require('./categorySeeds');
const seedRoutines = require('./routineSeeds')
const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedExercises();
  console.log('\n----- EXERCISES SEEDED -----\n');
  await seedRoutines();
  console.log('\n----- ROUTINES SEEDED -----\n')
  console.log('\n----- SUCCESSFULLY SEEDED gurugainz_db! -----\n');
  process.exit(0);
};
seedAll();