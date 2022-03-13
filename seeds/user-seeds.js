const { User } = require('../models');

const userData = [{
        username: 'Mac',
        password: '4321'

    },
    {
        username: 'Cam',
        password: '1124'
    },
    {
        username: 'Test',
        password: 'Test'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;