const Sequelize = require('sequelize');

const sequelize =  require('../util/database');


const TodoCompleted = sequelize.define('todocompleted', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    text: Sequelize.STRING,
},
{
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});

module.exports = TodoCompleted;