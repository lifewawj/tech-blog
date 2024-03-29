const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class User extends Model { 

    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }

}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
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
        modelName: 'user',
    }
)

module.exports = User;