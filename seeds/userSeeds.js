const { User } = require('../models');
var faker = require('faker');

const userData = [
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        focus_group: Math.floor(Math.random() * 7) + 1,
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        focus_group: Math.floor(Math.random() * 7) + 1,
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        focus_group: Math.floor(Math.random() * 7) + 1,
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        focus_group: Math.floor(Math.random() * 7) + 1,
    },
    {
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        focus_group: Math.floor(Math.random() * 7) + 1,
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers