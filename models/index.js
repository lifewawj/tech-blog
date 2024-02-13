// This file is to make the connections & relationships between the models
const User = require('./user-model'); // grabs the User model from the user-model.js file
const Post = require('./post-model'); // grabs the Post model from the user-model.js file

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Project };
