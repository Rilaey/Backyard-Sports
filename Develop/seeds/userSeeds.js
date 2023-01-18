const { User } = require('../models');

const userData = [
    {
        available: 1,
        state: 'FL',
        city: 'Orlando',
        username: 'player1',
        email: 'player1@gmail.com',
        password: 'password123!'
    },
    {
        available: 0,
        state: 'FL',
        city: 'Miami',
        username: 'player2',
        email: 'player2@gmail.com',
        password: 'password123!'
    },
    {
        available: 0,
        state: 'FL',
        city: 'Tampa',
        username: 'player3',
        email: 'player3@gmail.com',
        password: 'password123!'
    },
    {
        available: 1,
        state: 'FL',
        city: 'Tampa',
        username: 'player4',
        email: 'player4@gmail.com',
        password: 'password123!'
    },
]

const seedUserData = () => User.bulkCreate(userData);

module.exports = seedUserData;