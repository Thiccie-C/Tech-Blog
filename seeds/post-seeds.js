const { Post } = require('../models');

const postData = [{
        title: 'I LOVE FRONT END CODING',
        content: 'Front end coding is a lot of fun and I enjoy it the most out of the coding types that I know',
        user_id: 1

    },
    {
        title: 'Back end is very fun',
        content: 'Back end is the most interesting and best type of coding.',
        user_id: 2
    },
    {
        title: 'Coding in general is good',
        content: 'All coding is fun. I enjoy everything I am learning right now and look forward to my future',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;