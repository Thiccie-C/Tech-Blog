const { Comment } = require('../models');

const commentData = [{
        comment_text: "BOOO FRONT END SUCKS",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "BACK END IS MID AT BEST",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "I love it!!!!",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;