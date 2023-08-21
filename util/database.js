const Sequelize = require('sequelize');

const sequelize = new Sequelize('todolist','root','nodemysql',   
{
    dialect : 'mysql',
    host : 'localhost'
});

module.exports = sequelize;
