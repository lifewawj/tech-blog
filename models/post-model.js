const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config')

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },

    {
        // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        // Assigning the name for our table 'category'
        modelName: 'post',
    }
)

module.exports = Post;