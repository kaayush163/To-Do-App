const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist','root','nodemysql',    // here booking you have to manually create on mysql work bench password put in''
{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;