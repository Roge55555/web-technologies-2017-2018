const { connection, Sequelize } = require('../connection/connection');


const Admin = connection.define('admin', {
    Admin_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [5,10]
        },
        unique: {
            args: true,
            msg: 'such login already in use!'
          }
    },
    Admin_password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5,15],
                msg: 'password should contain 5-15 characters'
            }
        }
    }
});


module.exports = Admin;