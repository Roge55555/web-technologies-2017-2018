const Sequelize = require('sequelize');

const connection = new Sequelize('simple_db', 'root', 'password', {
    dialect: 'mysql'
});

connection.sync()
    .then(function(){
        console.log('* connection successed');
    })
    .catch(function(error){
        console.log(error);
    });

module.exports = { connection, Sequelize };